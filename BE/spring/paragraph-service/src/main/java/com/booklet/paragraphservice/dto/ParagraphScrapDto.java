package com.booklet.paragraphservice.dto;

import lombok.*;

import java.util.ArrayList;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ParagraphScrapDto {
    private ArrayList<String> scrapUserImages;
    private int scrapCount;
    private int userScrape; // 사용자가 스크랩한지 안한지 여부
}
