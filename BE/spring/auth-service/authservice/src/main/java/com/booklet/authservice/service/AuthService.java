package com.booklet.authservice.service;

import com.booklet.authservice.dto.*;
import org.springframework.security.core.Authentication;

import java.util.HashMap;

public interface AuthService {
    // 회원가입
    public HashMap<String, Object> signUp(SignUpReqDto signUpReqDto);

    public HashMap<String, Object> checkUsername(String username);

    public HashMap<String, Object> checkNickname(String username);

    public HashMap<String, Object> checkEmail(String username);

    public HashMap<String, Object>  setPw(SetPwReqDto setPwReqDto, Authentication authentication);
}
