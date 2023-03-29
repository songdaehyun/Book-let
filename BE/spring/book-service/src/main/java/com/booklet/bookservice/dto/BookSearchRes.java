package com.booklet.bookservice.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookSearchRes {
    private String bookIsbn;
    private String authorName;
    private String bookImage;
}
