package com.booklet.authservice.controller;

import com.booklet.authservice.config.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController
@Controller
@RequestMapping("/test")
@RequiredArgsConstructor
public class TestController {
    // Tip : JWT를 사용하면 UserDetailsService를 호출하지 않기 때문에 @AuthenticationPrincipal 사용
    // 불가능.
    // 왜냐하면 @AuthenticationPrincipal은 UserDetailsService에서 리턴될 때 만들어지기 때문이다.
//    @GetMapping("/")
//    public ResponseEntity<String> user(Authentication authentication) {
//        PrincipalDetails principal = (PrincipalDetails) authentication.getPrincipal();
//        return new ResponseEntity<String>(principal.getUsername().toString(), HttpStatus.OK);
//    }

    @RequestMapping("/")
    public String test1() {
        return "/test.html";
    }

    @RequestMapping("/data")
    public void Data() {

    }

}
