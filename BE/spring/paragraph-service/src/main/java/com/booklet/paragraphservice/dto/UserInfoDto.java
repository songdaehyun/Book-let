package com.booklet.paragraphservice.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserInfoDto {
    private Long userId;
    private String nickname;
    private String userImage;
    private int isFollowing;
}
