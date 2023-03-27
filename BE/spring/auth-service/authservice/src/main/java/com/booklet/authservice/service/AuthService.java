package com.booklet.authservice.service;

import com.booklet.authservice.dto.*;
import org.springframework.security.core.Authentication;

import java.util.HashMap;

public interface AuthService {
    // 회원가입
    public HashMap<String, Object> signUp(SignUpReqDto signUpReqDto);
    // 아이디 중복 확인
    public HashMap<String, Object> checkUsername(String username);
    // 닉네임 중복 확인
    public HashMap<String, Object> checkNickname(String nickname);
    // 이메일 중복 확인
    public HashMap<String, Object> checkEmail(String email);
    // 비밀번호 재설정
    public HashMap<String, Object>  setPw(SetPwReqDto setPwReqDto, Authentication authentication);
}
