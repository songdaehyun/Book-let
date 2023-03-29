package com.booklet.authservice.controller;

import com.booklet.authservice.dto.FollowReqDto;
import com.booklet.authservice.dto.SignUpReqDto;
import com.booklet.authservice.entity.User;
import com.booklet.authservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
//    private final UserService userService;
//
//    @PostMapping("/follow")
//    public ResponseEntity follow(@RequestBody FollowReqDto followReqDto) {
//
//        HashMap<String, Object> result = new HashMap<>();
//
//        Boolean check = userService.following(followReqDto);
//
//        if (check != true) {
//            result.put("message", "fail");
//            return new ResponseEntity<>(result, HttpStatus.CREATED);
//
//        } else {
//            result.put("message", "success");
//            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
//        }
//    }
}
