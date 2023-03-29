package com.booklet.userservice.dto;

import lombok.Data;

@Data
public class FollowReqDto {
    private String username;
    private String followingUsername;
}
