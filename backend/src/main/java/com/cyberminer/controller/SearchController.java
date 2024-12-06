package com.cyberminer.controller;

import com.cyberminer.event.SearchEventPublisher;
import com.cyberminer.model.KeywordSearch;
import com.cyberminer.model.URLDescriptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SearchController {
    @Autowired
    private SearchEventPublisher searchEventPublisher;

    @PostMapping("/search")
    public List<URLDescriptor> search(
            @RequestBody KeywordSearch searchRequest,
            @RequestParam String sort,
            @RequestParam int page,
            @RequestParam int pageSize) {
        return searchEventPublisher.publishSearchEvent(searchRequest, sort, page, pageSize);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteURL(@PathVariable Long id) {
        // Optionally publish delete event if needed
    }
}
