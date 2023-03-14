package com.booklet.paragraphservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ParagraphDto {
    private Long paragraphId;
    private String paragraphContent;
    private String paragraphColor;
    private int paragraphPage;
    private LocalDateTime date;
    private Long userId;
//    private Long bookId;
    private String bookIsbn;
}
