package com.cyberminer.event;

import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class SearchEventListener {
    @EventListener
    public void handleSearchEvent(SearchEvent event) {
        System.out.println("Search event triggered with details:");
        System.out.println("Keywords: " + event.getSearchRequest().getKeywords());
        System.out.println("Mode: " + event.getSearchRequest().getMode());
        System.out.println("Sort: " + event.getSort());
        System.out.println("Page: " + event.getPage());
        System.out.println("Page Size: " + event.getPageSize());
    }
}
