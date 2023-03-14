package com.booklet.paragraphservice.service;

import com.booklet.paragraphservice.dto.ParagraphCreateReq;
import com.booklet.paragraphservice.dto.ParagraphDto;
import com.booklet.paragraphservice.dto.ParagraphSetReq;
import com.booklet.paragraphservice.entity.Paragraph;

import java.util.ArrayList;

public interface ParagraphService {
    /** find,save, delete, update */

    // 문장 저장
    public Long saveParagraph(ParagraphCreateReq req);
    // 문장 1개 조회
    public ParagraphDto findParagraph(Long paragraphId);
    // user 본인이 등록한 문장 목록 조회
    public ArrayList<Paragraph> findParagraphs(Long userId);
    // user가 팔로잉한 회원들의 문장 목록 조회
    public ArrayList<Paragraph> findFollowParagraph(Long userId);
    // 문장 수정
    public Long updateParagraph(ParagraphSetReq req);
    // 문장 삭제
    public boolean deleteParagraph(Long paragraphId);
}
