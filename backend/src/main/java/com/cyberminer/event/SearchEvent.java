package com.cyberminer.event;

import com.cyberminer.model.KeywordSearch;
import org.springframework.context.ApplicationEvent;

public class SearchEvent extends ApplicationEvent {
    private final KeywordSearch searchRequest;
    private final String sort;
    private final int page;
    private final int pageSize;

    public SearchEvent(Object source, KeywordSearch searchRequest, String sort, int page, int pageSize) {
        super(source);
        this.searchRequest = searchRequest;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }

    public KeywordSearch getSearchRequest() {
        return searchRequest;
    }

    public String getSort() {
        return sort;
    }

    public int getPage() {
        return page;
    }

    public int getPageSize() {
        return pageSize;
    }
}
