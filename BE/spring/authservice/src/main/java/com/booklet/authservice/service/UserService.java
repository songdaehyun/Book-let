package com.booklet.authservice.service;

import java.util.HashMap;

public interface UserService {
    // 유저 기본 정보 조회
    public HashMap<String, Object> findUserInfo(String username);
}
