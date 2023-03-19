package com.booklet.paragraphservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRes {
    private Long userId;
    private String nickname;
//    private String userImage; // 보류
}
