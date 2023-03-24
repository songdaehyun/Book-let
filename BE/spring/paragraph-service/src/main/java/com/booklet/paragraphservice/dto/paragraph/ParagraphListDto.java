package com.booklet.paragraphservice.dto.paragraph;

import com.booklet.paragraphservice.entity.Paragraph;
import lombok.*;

import java.time.LocalDateTime;

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
    private ParagraphScrapDto paragraphScrapDto;
    // comment
    private int commentCnt;

    public ParagraphListDto(Paragraph paragraph, ParagraphScrapDto paragraphScrapDto, int commentCnt){
        this.paragraphId = paragraph.getParagraphId();
        this.paragraphContent = paragraph.getParagraphContent();
        this.paragraphPage = paragraph.getParagraphPage();
        this.paragraphColor = paragraph.getParagraphColor();
        this.createdDate = paragraph.getCreatedDate();
        this.modifiedDate = paragraph.getModifiedDate();
        this.paragraphScrapDto = paragraphScrapDto;
        this.commentCnt = commentCnt;
    }

}
