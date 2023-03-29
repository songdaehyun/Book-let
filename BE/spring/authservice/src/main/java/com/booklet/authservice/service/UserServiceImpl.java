package com.booklet.authservice.service;

import com.booklet.authservice.entity.User;
import com.booklet.authservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Override
    public HashMap<String, Object> findUserInfo(String username) {
        User user = userRepository.findByUsername(username);

        if (user == null) {
            return null;
        }

        try {
            HashMap<String, Object> result = new HashMap<>();
//            GetUserInfoResDto getUserInfoResDto = new GetUserInfoResDto().builder()
//                            .imgPath(user.getUserImg())
//                            .nickname(user.getNickname())
//                            .follower()
//                            .following()
//                            .build();
//            result.put("data",getUserInfoResDto);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
