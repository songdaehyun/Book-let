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
    public Map<String, Object> findParagraph(Long paragraphId) { // 한개의 문장 상세 보기
        Paragraph paragraph = paragraphRepository.findById(paragraphId).orElse(null);
        Book book = bookRepository.findById(paragraph.getBookIsbn()).orElse(null);
        User user = userRepository.findById(paragraph.getUserId()).orElse(null);
        if(paragraph!=null && book != null){
            Map<String, Object> result = new HashMap<>();
            ParagraphDto paragraphDto = ParagraphDto.builder()
                    .paragraphContent(paragraph.getParagraphContent())
                    .paragraphColor(paragraph.getParagraphColor())
                    .paragraphPage(paragraph.getParagraphPage())
                    .date(paragraph.getCreatedDate())
                    .build();
            // 책 정보
            BookDto bookDto = BookDto.builder()
                    .bookAuthor(book.getBookAuthor())
                    .bookTitle(book.getBookTitle())
                    .bookImage(book.getBookImage())
                    .bookIsbn(book.getBookIsbn())
                    .build();
            // 작성자 정보
            UserDto userDto = UserDto.builder()
                    .userId(paragraph.getUserId())
                    .nickname(user.getNickname())
                    .build();
            result.put("paragraph", paragraphDto);
            result.put("book", bookDto);
            result.put("user", userDto);

            return result;
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
