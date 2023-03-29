package com.booklet.bookservice.controller;

import com.booklet.bookservice.dto.BookLikeReq;
import com.booklet.bookservice.dto.BookSearchRes;
import com.booklet.bookservice.service.BookLikeService;
import com.booklet.bookservice.service.BookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("api/v1/book")
@RequiredArgsConstructor
@Component
public class BookController {
    private final BookLikeService bookLikeService;
    private final BookService bookService;


    /** 도서 좋아요 등록 및 취소 **/
    @PostMapping("/like")
    public ResponseEntity LikeBook(@RequestBody BookLikeReq request) throws Exception{
        String result="";
        if(bookLikeService.findLike(request)){ // 좋아요 존재 시 취소
            if(bookLikeService.deleteLike(request)){
                result = "cancel";
            }else result = "fail";
        }else{ // 좋아요 등록
            if(bookLikeService.createLike(request)) result = "like";
            else result = "fail";
        }

        return new ResponseEntity(result, HttpStatus.ACCEPTED);
    }

    @GetMapping("/search/{bookTitle}")
    public ResponseEntity searchBooks(@PathVariable String bookTitle) throws Exception{
        List<BookSearchRes> resList = bookService.searchBooks(bookTitle);
        return new ResponseEntity(resList, HttpStatus.ACCEPTED);
    }
}
