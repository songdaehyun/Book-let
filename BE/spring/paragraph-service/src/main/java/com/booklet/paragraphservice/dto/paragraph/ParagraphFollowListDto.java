package com.booklet.paragraphservice.dto.paragraph;

import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ParagraphFollowListDto {
    //user
    private String nickname;
    private Long userId;
    private String user_image;
    // Paragraph
    private Long paragraphId;
    private String paragraphContent;
    private int paragraphPage;
    private String paragraphColor;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;
    //scrap
    private ArrayList<String> scrapUserImages;
    private int scrapCnt;
    private int userScrap; // 스크랩 여부
    // comment
    private int commentCnt;
}
