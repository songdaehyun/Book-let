package com.booklet.paragraphservice.controller;

import com.booklet.paragraphservice.dto.ScrapReq;
import com.booklet.paragraphservice.dto.paragraph.ParagraphCreateReq;
import com.booklet.paragraphservice.entity.Scrap;
import com.booklet.paragraphservice.service.ScrapService;
import com.booklet.paragraphservice.service.ScrapServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("api/v1/scrap")
@RequiredArgsConstructor
@Component
public class ScrapController {
    private final ScrapService scrapService;

    @PostMapping
    public ResponseEntity doScrap(@RequestBody ScrapReq request) throws Exception {
        String result;
        if(scrapService.findScrap(request)){ // 스크랩 존재시 취소 로직
            if(scrapService.createScrap(request)){
                result = "scrap";
            }else{
                result = "fail";
            }
        }else{ // 안 했을 시 등록 로직
            if(scrapService.createScrap(request)){
                result = "cancel";
            }else result = "fail";
        }
        return new ResponseEntity<>(result, HttpStatus.ACCEPTED);
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
