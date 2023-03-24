package com.booklet.authservice.dto;

import com.booklet.authservice.entity.User;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SignUpReqDto {
    private String username;
    private String nickname;
    private String password;
    private String email;
    private int age;
    private int sex;
}