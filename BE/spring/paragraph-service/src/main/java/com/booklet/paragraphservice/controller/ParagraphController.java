package com.booklet.paragraphservice.controller;

import com.booklet.paragraphservice.dto.paragraph.ParagraphCreateReq;
import com.booklet.paragraphservice.service.ParagraphServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("api/v1/paragraph")
@RequiredArgsConstructor
@Component
public class ParagraphController {
    private final ParagraphServiceImpl paragraphService;

    @PostMapping
    public ResponseEntity createParagraph(@RequestBody ParagraphCreateReq request) throws Exception {
        HashMap<String, Object> map = new HashMap<>();
        Long resultId = paragraphService.saveParagraph(request);

        if (resultId != null) {
            map.put("message", "success");
            map.put("id", resultId);
            return new ResponseEntity<>(map, HttpStatus.CREATED);

        } else {
            map.put("message", "fail");
            return new ResponseEntity<>(map, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/{paragraphId}")
    public ResponseEntity getOneParagraph(@PathVariable("paragraphId") Long paragraphId){
        try{
            Map<String, Object> result = paragraphService.findParagraph(paragraphId);
            result.put("message", "success");
            return new ResponseEntity<>(result, HttpStatus.ACCEPTED);
        }catch (Exception e){
            Map<String, Object> result = new HashMap<>();
            result.put("message", "fail");
            return new ResponseEntity(result, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/mylist/{userId}")
    public ResponseEntity getListParagraphs(@PathVariable("userId") Long userId, int page, int size){
        // page : 요청할 페이지 번호, size : 한 페이지 당 조회 할 개수
        PageRequest pageRequest = PageRequest.of(page, size);
        HashMap<String, Object> result = paragraphService.findParagraphs(userId, pageRequest);

        return new ResponseEntity(result, HttpStatus.ACCEPTED);
    }

    @GetMapping("/following/{userId}")
    public ResponseEntity getFollowingParagraph(@PathVariable("userId") Long userId){

        return null;
    }

    @PutMapping("/{paragraphId}")
    public ResponseEntity modifyParagraph(@PathVariable("paragraphId") Long paragraphId){

        return null;
    }

    @DeleteMapping("/{paragraphId}")
    public ResponseEntity deleteParagraph(@PathVariable("paragraphId") Long paragraphId){

        return null;
    }
}
