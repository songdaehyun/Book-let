package com.booklet.recomservice.service;

import java.util.HashMap;

public interface RecomService {
    public HashMap<String, Object> getBookCoverRecom(String username);
    public HashMap<String, Object> getBookRecom(String type, String username);
}