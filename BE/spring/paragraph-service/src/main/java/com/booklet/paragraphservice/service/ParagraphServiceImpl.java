package com.booklet.paragraphservice.service;

import com.booklet.paragraphservice.dto.*;
import com.booklet.paragraphservice.entity.Book;
import com.booklet.paragraphservice.entity.Paragraph;
import com.booklet.paragraphservice.entity.User;
import com.booklet.paragraphservice.repository.BookRepository;
import com.booklet.paragraphservice.repository.CommentRepository;
import com.booklet.paragraphservice.repository.ParagraphRepository;
import com.booklet.paragraphservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.modelmapper.spi.MatchingStrategy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class ParagraphServiceImpl implements ParagraphService{
    private final ParagraphRepository paragraphRepository;
    private final BookRepository bookRepository;
    private final UserRepository userRepository;
    private final CommentRepository commentRepository;

    @Transactional
    @Override
    public Long saveParagraph(ParagraphCreateReq req) { // 문장 id 리턴
        Long result = 0L;
        try{
            Paragraph paragraph = Paragraph.builder()
                    .paragraphContent(req.getParagraphContent())
                    .paragraphPage(req.getParagraphPage())
                    .paragraphColor(req.getParagraphColor())
                    .bookIsbn(req.getBookIsbn())
                    .userId(req.getUserId())
                    .build();
            log.info("paragraph: {}", paragraph);

            result = paragraphRepository.save(paragraph).getParagraphId();
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }

        return result;
    }

    @Override
    public Map<String, Object> findParagraph(Long paragraphId) { // 한개의 문장 상세 보기
        Paragraph paragraph = paragraphRepository.findById(paragraphId).orElse(null);
        Book book = bookRepository.findById(paragraph.getBookIsbn()).orElse(null);
        User user = userRepository.findById(paragraph.getUserId()).orElse(null);
        try{
            Map<String, Object> result = new HashMap<>();
            ModelMapper mapper = new ModelMapper();
            mapper.getConfiguration().setAmbiguityIgnored(true);
            ParagraphDto paragraphDto = new ModelMapper().map(paragraph, ParagraphDto.class);
            // 책 정보
            BookDto bookDto = new ModelMapper().map(book, BookDto.class);
            // 작성자 정보
            UserDto userDto = new ModelMapper().map(user, UserDto.class);
            result.put("paragraph", paragraphDto);
            result.put("book", bookDto);
            result.put("user", userDto);

            return result;
        }catch (Exception e){
            e.printStackTrace();
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
    public boolean deleteParagraph(Long paragraphId) { // 등록된 문장 삭제
        try{
            paragraphRepository.deleteById(paragraphId);
        }catch (Exception e){
//            log.info("error : {}", e.getStackTrace());
            return false;
        }
        return false;
    }
}
