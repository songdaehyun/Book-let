package com.booklet.authservice.service;

import com.booklet.authservice.dto.*;

public interface AuthService {
    // 회원가입
    public SignUpResDto signUp(SignUpReqDto signUpReqDto);

    public LoginDataDto logIn(LoginReqDto loginReqDto);
}
