package com.booklet.authservice.service;

import com.booklet.authservice.dto.FollowReqDto;
import com.booklet.authservice.dto.UserTasteReqDto;
import com.booklet.authservice.entity.User;

import java.util.HashMap;
import java.util.List;

public interface UserService {
    // 유저 기본 정보 조회
    public HashMap<String, Object> findUserInfo(String username);
    // 팔로우
    public boolean following(FollowReqDto followReqDto);
    // 문장취향 등록
    public boolean saveUserTaste(UserTasteReqDto userTasteReqDto, String username);
    // 긍정 점수 계산 및 저장
    public HashMap<String, Object> saveUserPreferScore(String username);
}
