package com.booklet.paragraphservice.dto;

import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ParagraphListDto { // user가 등록한 목록 조회하기 위한 DTO
    // Paragraph
    private Long paragraphId;
    private String paragraphContent;
    private int paragraphPage;
    private String paragraphColor;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;
    //scrap
    private ArrayList<String> scrapUserImages; // 스크랩한 사람들의 이미지
    private int scrapCnt;
    // comment
    private int commentCnt;
}
