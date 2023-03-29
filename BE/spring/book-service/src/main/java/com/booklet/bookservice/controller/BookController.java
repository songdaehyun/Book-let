package com.booklet.bookservice.controller;

import com.booklet.bookservice.dto.LikeReq;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("api/v1/book")
@RequiredArgsConstructor
@Component
public class BookController {

    @PostMapping("/like")
    public ResponseEntity LikeBook(@RequestBody LikeReq request) throws Exception{
        String result="";

        return new ResponseEntity(result, HttpStatus.ACCEPTED);
    }
}
