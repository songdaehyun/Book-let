package com.booklet.authservice.controller;

import com.booklet.authservice.config.auth.PrincipalDetails;
import com.booklet.authservice.dto.*;
import com.booklet.authservice.entity.User;
import com.booklet.authservice.repository.UserRepository;
import com.booklet.authservice.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> LogIn(@RequestBody LoginReqDto loginReqDto) {
        LoginDataDto loginDataDto = authService.logIn(loginReqDto);
        if (loginDataDto == null) {
            return new ResponseEntity<Boolean>(false, HttpStatus.BAD_REQUEST);
        }
        LoginResDto loginResDto = new LoginResDto(loginDataDto.getUsername(), loginDataDto.getNickname());
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(HttpHeaders.AUTHORIZATION, loginDataDto.getToken());
        return ResponseEntity.ok().headers(httpHeaders).body(loginResDto);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody SignUpReqDto signUpReqDto) {
        return new ResponseEntity<SignUpResDto>(authService.signUp(signUpReqDto),HttpStatus.ACCEPTED);
    }
    // 모든 사람이 접근 가능
    @GetMapping("home")
    public String home() {
        return "<h1>home</h1>";
    }

    @GetMapping("user/test")
    public String usertest(Authentication authentication) {
        PrincipalDetails principalDetails =  (PrincipalDetails) authentication.getPrincipal();
        System.out.println("test입니다");
        System.out.println(principalDetails.getUsername());
        System.out.println(principalDetails.getUser().getUsername());
        return principalDetails.toString();
    }

    // Tip : JWT를 사용하면 UserDetailsService를 호출하지 않기 때문에 @AuthenticationPrincipal 사용
    // 불가능.
    // 왜냐하면 @AuthenticationPrincipal은 UserDetailsService에서 리턴될 때 만들어지기 때문이다.

    // 유저 혹은 매니저 혹은 어드민이 접근 가능
    @GetMapping("user")
    public String user(Authentication authentication) {
        PrincipalDetails principal = (PrincipalDetails) authentication.getPrincipal();
        System.out.println("principal : " + principal.getUser().getId());
        System.out.println("principal : " + principal.getUser().getUsername());
        System.out.println("principal : " + principal.getUser().getPassword());

        return "<h1>user</h1>";
    }

    // 어드민이 접근 가능
    @GetMapping("admin/users")
    public List<User> users() {
        return userRepository.findAll();
    }

    @PostMapping("/join")
    public String join(@RequestBody User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setRole("ROLE_USER");
//        user.setRoles("USER");
        userRepository.save(user);
        return "회원가입완료";
    }
}
