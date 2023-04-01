package com.booklet.recomservice.util;

import com.booklet.recomservice.entity.User;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.client.methods.HttpHead;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.context.annotation.Bean;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

@Slf4j
@Component
public class RequestTools {

    RestTemplate restTemplate = new RestTemplate();

    public List<Object> getRecomCover(User user) {
        List<Object> result = new ArrayList<>();
        System.out.println("함수 실행");
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("http://192.168.31.234:8000/api/v1/recom/image")
                .queryParam("book_isbn","309316496").queryParam("book_image", "https://image.aladin.co.kr/product/27926/76/cover/8962475812_1.jpg");
        String url = builder.toUriString();
        System.out.println("url : "+url);
        HttpHeaders headers = new HttpHeaders();
        headers.setAcceptCharset(Collections.singletonList(StandardCharsets.UTF_8));
        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
//                getForEntity(url, String.class);
        JSONObject jsonObject = new JSONObject(response);
        System.out.println(jsonObject.toString());
        System.out.println(jsonObject.get("body"));
        System.out.println(jsonObject.get("body").getClass().toString());
        JSONArray dataArr = jsonObject.getJSONObject("body").getJSONArray("data");
        System.out.println(dataArr);

        System.out.println("GET 요청 결과: " + response);
        System.out.println(response.getBody());
        System.out.println(dataArr.toString());

        return result;
    }

    public List<Integer> getRecombooks(String type, User user) {
        List<Integer> result = new ArrayList<>();

        MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
        formData.add("user_id", user.getId().toString());

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(formData, headers);

        String setting = null;

        switch (type) {
            case "score":
                setting = "star";
                break;
            case "like":
                setting = "like";
                break;
            case "genre":
                setting = "category";
                break;
            case "user":
                setting = "profile";
                break;
        }
        String url = "https://192.168.31.193:8000/basic_recom/" + setting + "/";

        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.postForObject(url, requestEntity, String.class);


        log.info("GET 요청 결과: " + response);

        return result;
    }

}
