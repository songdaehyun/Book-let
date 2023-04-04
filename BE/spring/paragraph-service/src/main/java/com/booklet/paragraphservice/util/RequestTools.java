package com.booklet.paragraphservice.util;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.HashMap;

@Component
@RequiredArgsConstructor
@Slf4j
public class RequestTools {

    public void getScoreAndTyp(String paragraphContent){
        RestTemplate restTemplate = new RestTemplate();
        MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
        formData.add("sentence", paragraphContent);

        String url = "https://j8b306.p.ssafy.io/basic_recom/sentence/";
        // create header
        HttpHeaders headers = new HttpHeaders();
        headers.setAcceptCharset(Collections.singletonList(StandardCharsets.UTF_8));
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);


        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(formData, headers);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);
        try {
            System.out.println(response.getBody());
            System.out.println("HHHHHHHHHHHHEEEEEEEEEEEEERRRRRRRRRRRRRRR");

        } catch (Exception e){
            log.info("요청 변환에 실패하였습니다" + restTemplate.postForObject(url, requestEntity, String.class));
        }
    }
}
