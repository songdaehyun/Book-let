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
