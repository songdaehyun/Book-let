package com.booklet.authservice.service;

import com.booklet.authservice.dto.FollowReqDto;
import com.booklet.authservice.dto.UserTasteReqDto;
import com.booklet.authservice.entity.User;

import java.util.HashMap;
import java.util.List;

public interface UserService {
    // 유저 기본 정보 조회
    public HashMap<String, Object> findUserInfo(String username);

    public boolean following(FollowReqDto followReqDto);

    public boolean saveUserTaste(UserTasteReqDto userTasteReqDto, String username);
}
