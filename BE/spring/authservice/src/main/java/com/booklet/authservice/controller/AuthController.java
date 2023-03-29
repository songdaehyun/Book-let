package com.booklet.authservice.controller;

import com.booklet.authservice.config.auth.PrincipalDetails;
import com.booklet.authservice.dto.*;
import com.booklet.authservice.entity.User;
import com.booklet.authservice.repository.UserRepository;
import com.booklet.authservice.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity signUp(@RequestBody SignUpReqDto signUpReqDto) {

        HashMap<String, Object> result = new HashMap<>();
        result = authService.signUp(signUpReqDto);

        if (result != null) {
            result.put("message", "success");
            return new ResponseEntity<>(result, HttpStatus.CREATED);

        } else {
            result.put("message", "fail");
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("user/test")
    public String usertest(Authentication authentication) {
        PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
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

    @PostMapping("/setpw")
    public ResponseEntity setPw(Authentication authentication, @RequestBody SetPwReqDto setPwReqDto) {

        HashMap<String, Object> result = new HashMap<>();
        result = authService.setPw(setPwReqDto, authentication);

        if (result != null) {
            result.put("message", "success");
            return new ResponseEntity<>(result, HttpStatus.OK);

        } else {
            HashMap<String, Object> failResult = new HashMap<>();
            failResult.put("message", "fail");
            return new ResponseEntity<>(failResult, HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/check/username/{username}")
    public ResponseEntity<?> checkUsername(@PathVariable String username) {
        HashMap<String, Object> result = new HashMap<>();
        result = authService.checkUsername(username);
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @GetMapping("/check/nickname/{nickname}")
    public ResponseEntity<?> checkNickname(@PathVariable String nickname) {
        HashMap<String, Object> result = new HashMap<>();
        result = authService.checkNickname(nickname);
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @GetMapping("/check/email/{email}")
    public ResponseEntity<?> checkEmail(@PathVariable String email) {
        HashMap<String, Object> result = new HashMap<>();
        result = authService.checkEmail(email);
        return new ResponseEntity(result, HttpStatus.OK);
    }


}
