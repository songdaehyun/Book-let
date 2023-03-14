package com.booklet.paragraphservice.controller;

import com.booklet.paragraphservice.dto.ParagraphCreateReq;
import com.booklet.paragraphservice.service.ParagraphServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@Slf4j
@RestController
@RequestMapping("api/v1/paragraph")
@RequiredArgsConstructor
@Component
//@Api(value = "장바구니 관련 API")
public class ParagraphController {
    private final ParagraphServiceImpl paragraphService;

    @PostMapping
    public ResponseEntity createParagraph(@RequestBody ParagraphCreateReq request) throws Exception {
        HashMap<String, Object> map = new HashMap<>();
        Long resultId = paragraphService.saveParagraph(request);

        if (resultId != null) {
            map.put("message", "success");
            map.put("id", resultId);
        } else {
            map.put("message", "fail");
        }
        return new ResponseEntity<>(map, HttpStatus.ACCEPTED);
    }
}
