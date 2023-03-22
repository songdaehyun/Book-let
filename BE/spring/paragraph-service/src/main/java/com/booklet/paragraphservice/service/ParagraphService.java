package com.booklet.paragraphservice.service;

import com.booklet.paragraphservice.dto.paragraph.ParagraphCreateReq;
import com.booklet.paragraphservice.dto.paragraph.ParagraphSetReq;
import com.booklet.paragraphservice.entity.Paragraph;
import com.booklet.paragraphservice.entity.User;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public interface ParagraphService {
    /** find,save, delete, update */

    public Long saveParagraph(ParagraphCreateReq req);    // 문장 저장
    public boolean isExist(Long paragraphId);

    public Map<String, Object> findParagraph(Long paragraphId);    // 문장 1개 조회

    public HashMap<String, Object> findParagraphs(User user, Pageable pageable);    // user 본인이 등록한 문장 목록 조회

    public HashMap<String, Object>  findFollowParagraph(User user, Pageable pageable) ;  // user가 팔로잉한 회원들의 문장 목록 조회

    public Long updateParagraph(ParagraphSetReq req);    // 문장 수정

    public boolean deleteParagraph(Long paragraphId);    // 문장 삭제

}
