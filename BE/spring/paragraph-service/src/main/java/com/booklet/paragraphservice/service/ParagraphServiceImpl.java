package com.booklet.paragraphservice.service;

import com.booklet.paragraphservice.dto.ParagraphCreateReq;
import com.booklet.paragraphservice.dto.ParagraphDto;
import com.booklet.paragraphservice.dto.ParagraphSetReq;
import com.booklet.paragraphservice.entity.Paragraph;
import com.booklet.paragraphservice.repository.ParagraphRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.modelmapper.spi.MatchingStrategy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class ParagraphServiceImpl implements ParagraphService{
    private final ParagraphRepository paragraphRepository;

    @Transactional
    @Override
    public Long saveParagraph(ParagraphCreateReq req) { // 문장 id 리턴
        Paragraph paragraph = new Paragraph();
        paragraph = Paragraph.builder()
                .paragraphContent(req.getParagraphContent())
                .paragraphPage(req.getParagraphPage())
                .paragraphColor(req.getParagraphColor())
                .bookIsbn(req.getBookIsbn())
                .userId(req.getUserId())
                .build();
        log.info("paragraph: {}", paragraph);

        Long result = paragraphRepository.save(paragraph).getParagraphId();

        return result;
    }

    @Override
    public ParagraphDto findParagraph(Long paragraphId) { // 한개의 문장 상세 보기
        Paragraph paragraph = paragraphRepository.findById(paragraphId).orElse(null);
        if(paragraph!=null){
            ParagraphDto paragraphDto = ParagraphDto.builder()
                    .paragraphContent(paragraph.getParagraphContent())
                    .paragraphColor(paragraph.getParagraphColor())
                    .paragraphPage(paragraph.getParagraphPage())
                    .date(paragraph.getCreatedDate())
                    .build();
        }
        return null;
    }

    @Override
    public ArrayList<Paragraph> findParagraphs(Long userId) {
        return null;
    }

    @Override
    public ArrayList<Paragraph> findFollowParagraph(Long userId) {
        return null;
    }

    @Override
    public Long updateParagraph(ParagraphSetReq req) {
        return null;
    }

    @Override
    public boolean deleteParagraph(Long paragraphId) {
        return false;
    }
}
