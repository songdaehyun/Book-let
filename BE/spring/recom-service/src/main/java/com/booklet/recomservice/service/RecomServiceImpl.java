package com.booklet.recomservice.service;

import com.booklet.recomservice.entity.User;
import com.booklet.recomservice.repository.UserRepository;
import com.booklet.recomservice.util.RequestTools;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.HashMap;
import java.util.List;


@Slf4j
@Service
@RequiredArgsConstructor
public class RecomServiceImpl implements RecomService{

    private final RequestTools requestTools;

    private final UserRepository userRepository;

    @Override
    public HashMap<String, Object> getBookCoverRecom(String username) {
        User user = userRepository.findByUsername(username);
        requestTools.getRecomCover(user);
        return null;
    }

    @Override
    public HashMap<String, Object> getBookRecom(String type, String username) {
        HashMap<String, Object> result = new HashMap<>();
        User user = userRepository.findByUsername(username);
        List<Integer> items = requestTools.getRecombooks(type, user);

        if (items == null) {
            return null;
        }
        result.put("data", items);

        return result;
    }

}
//
//    RestTemplate restTemplate = new RestTemplate();
//
//    public void GetRequest() {
////        HashMap<String, Object> result = new HashMap<>();
//        System.out.println("함수 실행");
////
////
//        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("http://192.168.31.234:8000/api/v1/recom/image")
//                .queryParam("book_isbn","309316496").queryParam("book_image", "https://image.aladin.co.kr/product/27926/76/cover/8962475812_1.jpg");
//        String url = builder.toUriString();
//        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
//
//        System.out.println("GET 요청 결과: " + response);
//
//
////        MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
////        formData.add("user_id", "3");
////
////        HttpHeaders headers = new HttpHeaders();
////        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
////
////        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(formData, headers);
//
////        String url = "http://192.168.31.193:8000/basic_recom/star/"; // 예상 평점 기반 도서 추천
//////        String url = "http://192.168.31.193:8000/basic_recom/like/";  // 좋아요 기반 도서 추천 목록
//////        String url = "http://192.168.31.193:8000/basic_recom/category/";  // 장르 기반 도서 추천 목록
//////        String url = "http://192.168.31.193:8000/basic_recom/profile/";  // 인적사항 기반 도서추천 목록
////
////        RestTemplate restTemplate = new RestTemplate();
////        String response = restTemplate.postForObject(url, requestEntity, String.class);
////
////
////        System.out.println("GET 요청 결과: " + response);
//
//    }
//
//
////        // POST 요청
////    url = "https://api.example.com/users";
////    User newUser = new User("John Doe", "johndoe@example.com");
////    ResponseEntity<User> createdUserResponse = restTemplate.postForEntity(url, newUser, User.class);
////        System.out.println("생성된 사용자: " + createdUserResponse.getBody());
