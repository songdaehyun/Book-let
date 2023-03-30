package com.booklet.authservice.controller;

import com.booklet.authservice.dto.FollowReqDto;
import com.booklet.authservice.dto.SignUpReqDto;
import com.booklet.authservice.dto.UserTasteReqDto;
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
    private final UserService userService;

    @GetMapping("/{username}")
    public ResponseEntity getUserInfo(@PathVariable String username) {

        HashMap<String, Object> result = new HashMap<>();

        result = userService.findUserInfo(username);

        if (result == null) {
            result.put("message", "fail");
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);

        } else {
            result.put("message", "success");
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }

    @PostMapping("/follow")
    public ResponseEntity follow(@RequestBody FollowReqDto followReqDto) {

        HashMap<String, Object> result = new HashMap<>();

        Boolean check = userService.following(followReqDto);

        if (check != true) {
            System.out.println("컨트롤러 : 읍음");
            result.put("message", "fail");
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);

        } else {
            System.out.println("컨트롤러 : 잇음");
            result.put("message", "success");
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }

    @PostMapping("/taste/{username}")
    public ResponseEntity saveUserTaste(@RequestBody UserTasteReqDto userTasteReqDto, @PathVariable String username) {

        HashMap<String, Object> result = new HashMap<>();

        Boolean check = userService.saveUserTaste(userTasteReqDto, username);

        if (check != true) {
            result.put("message", "fail");
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);

        } else {
            result.put("message", "success");

            HashMap<String, Object> saveResult = userService.saveUserPreferScore(username);
            result.put("preferType", saveResult.get("type"));
            result.put("preferScore", saveResult.get("score"));
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }
}
