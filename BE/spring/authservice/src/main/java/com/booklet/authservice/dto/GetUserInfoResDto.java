package com.booklet.authservice.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
//@Builder
@NoArgsConstructor
public class GetUserInfoResDto {
    private String imgPath;
    private String nickname;
    private Integer follower;
    private Integer following;
}
