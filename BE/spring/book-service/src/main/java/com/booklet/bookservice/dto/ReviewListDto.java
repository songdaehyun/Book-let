package com.booklet.bookservice.dto;

import com.booklet.bookservice.entity.User;
import lombok.*;
import org.modelmapper.ModelMapper;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewListDto {
    private UserDto userInfo;
    private String reviewContent;
    private String createdDate;

    @Builder
    public ReviewListDto(UserDto userInfo, String reviewContent, String createdDate) {
        this.userInfo = userInfo;
        this.reviewContent = reviewContent;
        this.createdDate = createdDate;
    }
}
