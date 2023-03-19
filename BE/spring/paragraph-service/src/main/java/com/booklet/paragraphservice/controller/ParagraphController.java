package com.booklet.paragraphservice.controller;

import com.booklet.paragraphservice.dto.ParagraphCreateReq;
import com.booklet.paragraphservice.service.ParagraphServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.core.Response;
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
    public ResponseEntity getListParagraph(@PathVariable("userId") Long userId){

        return null;
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
