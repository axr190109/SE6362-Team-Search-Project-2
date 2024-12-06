package com.cyberminer.model;

import java.util.List;

public class KeywordSearch {
    private List<String> keywords;
    private String mode;

    public List<String> getKeywords() {
        return keywords;
    }

    public void setKeywords(List<String> keywords) {
        this.keywords = keywords;
    }

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }
}
