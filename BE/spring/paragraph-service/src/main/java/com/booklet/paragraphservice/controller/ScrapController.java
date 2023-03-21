package com.booklet.paragraphservice.controller;

import com.booklet.paragraphservice.dto.ScrapReq;
import com.booklet.paragraphservice.dto.paragraph.ParagraphCreateReq;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("api/v1/scrap")
@RequiredArgsConstructor
@Component
public class ScrapController {
    @PostMapping
    public ResponseEntity createScrap(@RequestBody ScrapReq request) throws Exception {



        return null;
    }

    @GetMapping("/{userId}")
    public ResponseEntity getScrapList(@PathVariable Long userId){

        return null;
    }

    @GetMapping("/count/{paragraphId}")
    public ResponseEntity getScrapCount(@PathVariable Long paragraphId){

        return null;
    }
}
