package com.booklet.paragraphservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookDto {
    private String bookIsbn;
    private String bookTitle;
    private String bookAuthor;
    private String bookImage;
}
