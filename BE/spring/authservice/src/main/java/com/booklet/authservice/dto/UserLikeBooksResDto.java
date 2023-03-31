package com.booklet.authservice.dto;

import lombok.Data;

@Data
public class UserLikeBooksResDto {
    private String bookIsbn;
    private String bookImgPath;
    private String bookTitle;
    private String authorName;
}
