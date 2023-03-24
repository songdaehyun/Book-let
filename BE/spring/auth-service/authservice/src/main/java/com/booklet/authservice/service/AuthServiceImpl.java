package com.booklet.authservice.service;

import com.booklet.authservice.config.auth.PrincipalDetails;
import com.booklet.authservice.dto.*;
import com.booklet.authservice.entity.User;
import com.booklet.authservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private AuthenticationManager authenticationManager;

    @Override
    public SignUpResDto signUp(SignUpReqDto signUpReqDto) {
        signUpReqDto.setPassword(bCryptPasswordEncoder.encode(signUpReqDto.getPassword()));

        return new SignUpResDto();
    }

    @Override
    public LoginDataDto logIn(LoginReqDto loginReqDto) {
        // 이름이 확인
        User user = userRepository.findByUsername(loginReqDto.getUsername());
        if (user == null) {
            System.out.println("유저 정보가 없어용");
            return null;
        };

        // 비밀번호 확인
        System.out.println(user.getPassword());
        System.out.println(bCryptPasswordEncoder.encode(loginReqDto.getPassword()));
        if (!user.getPassword().equals(bCryptPasswordEncoder.encode(loginReqDto.getPassword())))
            {System.out.println("아이디 비밀번호가 틀렸어용"); return null;}

        // 토큰생성 후 세션에 저장
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(
                        loginReqDto.getUsername(),
                        loginReqDto.getPassword());

        System.out.println("JwtAuthenticationFilter : 토큰생성완료");

        Authentication authentication =
                authenticationManager.authenticate(authenticationToken);

        PrincipalDetails principalDetailis = (PrincipalDetails) authentication.getPrincipal();

        return new LoginDataDto(user.getUsername(), user.getNickname(), "Bearer " + authenticationToken.toString());
    }
}







//    @PostMapping("signup")
//    public String join(@RequestBody User user) {
//        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
//        user.setRoles("USER");
//        userRepository.save(user);
//        return "회원가입완료";
//    }