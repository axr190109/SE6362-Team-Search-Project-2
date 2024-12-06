package com.cyberminer.event;

import com.cyberminer.model.KeywordSearch;
import com.cyberminer.model.URLDescriptor;
import com.cyberminer.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SearchEventPublisher {
    @Autowired
    private ApplicationEventPublisher applicationEventPublisher;

    @Autowired
    private SearchService searchService;

    public List<URLDescriptor> publishSearchEvent(KeywordSearch searchRequest, String sort, int page, int pageSize) {
        // Create and publish the event
        SearchEvent searchEvent = new SearchEvent(this, searchRequest, sort, page, pageSize);
        applicationEventPublisher.publishEvent(searchEvent);

        // Handle search using the service
        return searchService.search(searchRequest.getKeywords(), searchRequest.getMode(), sort, page, pageSize);
    }
}
