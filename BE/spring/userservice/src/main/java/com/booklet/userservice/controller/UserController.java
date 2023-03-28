package com.booklet.userservice.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    private final

    @GetMapping("/")
    public ResponseEntity getUserInfo() {
        HashMap<String, Object> result = new HashMap<>();
        result =
    }

}
