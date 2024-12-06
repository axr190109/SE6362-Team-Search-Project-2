package com.cyberminer.service;

import com.cyberminer.model.URLDescriptor;
import com.cyberminer.repository.URLRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SearchService {
    @Autowired
    private URLRepository urlRepository;

    public List<URLDescriptor> search(List<String> keywords, String mode, String sort, int page, int pageSize) {
        List<URLDescriptor> allUrls = urlRepository.findAll();

        // Apply filtering logic based on keywords and mode
        List<URLDescriptor> filteredUrls = allUrls.stream()
                .filter(url -> matchesKeywords(url.getDescription(), keywords, mode))
                .collect(Collectors.toList());

        // Apply sorting based on the sort parameter
        switch (sort.toLowerCase()) {
            case "alphabetical":
                filteredUrls.sort(Comparator.comparing(URLDescriptor::getDescription));
                break;
            case "frequency":
                filteredUrls.sort(Comparator.comparing(URLDescriptor::getFrequency).reversed());
                break;
            case "payment":
                filteredUrls.sort(Comparator.comparing(URLDescriptor::getPayment).reversed());
                break;
            default:
                break; // No sorting if sort parameter is invalid or not provided
        }

        // Implement pagination
        int fromIndex = page * pageSize;
        int toIndex = Math.min(fromIndex + pageSize, filteredUrls.size());
        if (fromIndex >= filteredUrls.size()) {
            return List.of(); // Return empty list if page exceeds total results
        }

        return filteredUrls.subList(fromIndex, toIndex);
    }

    private boolean matchesKeywords(String description, List<String> keywords, String mode) {
        if ("OR".equalsIgnoreCase(mode)) {
            return keywords.stream().anyMatch(description::contains);
        } else if ("AND".equalsIgnoreCase(mode)) {
            return keywords.stream().allMatch(description::contains);
        } else if ("NOT".equalsIgnoreCase(mode)) {
            return keywords.stream().noneMatch(description::contains);
        }
        return false;
    }

    public void deleteURLById(Long id) {
        urlRepository.deleteById(id);
    }
}
