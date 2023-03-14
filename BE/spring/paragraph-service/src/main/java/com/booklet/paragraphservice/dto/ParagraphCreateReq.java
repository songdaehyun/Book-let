package com.booklet.paragraphservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ParagraphCreateReq {
    private Long userId;
    private String bookIsbn;
    private String paragraphContent;
    private int paragraphPage;
    private String paragraphColor;

}
