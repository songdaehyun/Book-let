package com.booklet.authservice.controller;

import com.booklet.authservice.config.auth.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/check")
@RequiredArgsConstructor
public class CheckingUserController {

    @GetMapping("/")
    public ResponseEntity<String> user(Authentication authentication) {
        PrincipalDetails principal = (PrincipalDetails) authentication.getPrincipal();
        return new ResponseEntity<String>(principal.getUsername().toString(), HttpStatus.OK);
    }
}
