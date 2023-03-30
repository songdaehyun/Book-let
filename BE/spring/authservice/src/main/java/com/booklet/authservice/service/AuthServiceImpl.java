package com.booklet.authservice.service;

import com.booklet.authservice.config.auth.PrincipalDetails;
import com.booklet.authservice.dto.*;
import com.booklet.authservice.entity.User;
import com.booklet.authservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private PrincipalDetails principalDetails;

    @Override
    public HashMap<String, Object> signUp(SignUpReqDto signUpReqDto) {
        try {
            signUpReqDto.setPassword(bCryptPasswordEncoder.encode(signUpReqDto.getPassword()));
            HashMap<String, Object> result = new HashMap<>();
            ModelMapper modelMapper = new ModelMapper();
            modelMapper.getConfiguration().setAmbiguityIgnored(true);
            User user = modelMapper.map(signUpReqDto, User.class);
            user.setRole("ROLE_USER");
            userRepository.save(user);


            SignUpResDto signUpResDto = modelMapper.map(user, SignUpResDto.class);

            result.put("data", signUpResDto);
            return result;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;

    }

    @Override
    public HashMap<String, Object> checkUsername(String username) {
        HashMap<String, Object> result = new HashMap<>();
        User user = userRepository.findByUsername(username);
        if (user == null) {
            result.put("message", "available");
        } else {
            result.put("message", "duplicate");
        }
        return result;
    }

    @Override
    public HashMap<String, Object> checkNickname(String nickname) {
        HashMap<String, Object> result = new HashMap<>();
        User user = userRepository.findByNickname(nickname);
        if (user == null) {
            result.put("message", "available");
        } else {
            result.put("message", "duplicate");
        }
        return result;
    }

    @Override
    public HashMap<String, Object> checkEmail(String email) {
        HashMap<String, Object> result = new HashMap<>();
        User user = userRepository.findByEmail(email);
        if (user == null) {
            result.put("message", "available");
        } else {
            result.put("message", "duplicate");
        }
        return result;
    }

    @Override
    public HashMap<String, Object> setPw(SetPwReqDto setPwReqDto, Authentication authentication) {
        System.out.println("비밀번호 변경요청 옴!");
        System.out.println(setPwReqDto.toString());
        HashMap result = new HashMap();
        PrincipalDetails principalDetails =  (PrincipalDetails) authentication.getPrincipal();
        User user = principalDetails.getUser();
        System.out.println(user.getUsername());
        System.out.println(bCryptPasswordEncoder.matches(setPwReqDto.getPassword(), user.getPassword()));
        if (bCryptPasswordEncoder.matches(setPwReqDto.getPassword(), user.getPassword())==true) {
            System.out.println("같네용");
            user.setPassword(bCryptPasswordEncoder.encode(setPwReqDto.getNewPassword()));
            userRepository.save(user);
            result.put("data", true);
            return result;
        } else {
            System.out.println("다릅니당");
            return null;
       }

    }
}