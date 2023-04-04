package com.booklet.recomservice.service;

import com.booklet.recomservice.dto.RecomResDto;
import com.booklet.recomservice.entity.Book;
import com.booklet.recomservice.entity.User;
import com.booklet.recomservice.repository.BookRepository;
import com.booklet.recomservice.repository.UserRepository;
import com.booklet.recomservice.util.RequestTools;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


@Slf4j
@Service
@RequiredArgsConstructor
public class RecomServiceImpl implements RecomService{

    private final RequestTools requestTools;

    private final UserRepository userRepository;

    private final BookRepository bookRepository;

    @Override
    public HashMap<String, Object> getBookCoverRecom(String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) {return null;}
        HashMap<String, Object> result = new HashMap<>();
        ArrayList<RecomResDto> recommend = new ArrayList<>();

        List<BookCover> bookCovers = bookCoverRepository.findAllByUser(user);
        int cnt = 0;
        // 좋아요 누른 녀석이 없다면
        if (bookCovers.size() == 0) {
            log.info("추천 책 커버 정보가 없어 랜덤한 커버로 응답합니다.");
            for (int i = 0; i < 10; i ++) {
                Book book = bookRepository.findRandomBook();
                recommend.add(RecomResDto.builder()
                        .authorName(book.getAuthor().getAuthorName())
                        .bookImgPath(book.getBookImage())
                        .bookIsbn(book.getBookIsbn())
                        .bookTitle(book.getBookTitle())
                        .build());
                if (setting==0 && recommend.size() >= 5) {break;}
            }
            
            result.put("recommendType","bookCover");
            result.put("recommend", recommend);
            return result;
        }
        // 좋아요 누른 녀석이 있다면
        for (BookCover bookCover : bookCovers) {
            CoverDataDto coverDataDto = requestTools.getRecomCover(bookCover.getBookIsbn());

            Book firstBook = bookRepository.findByBookIsbn(coverDataDto.getItem1());
            recommend.add(RecomResDto.builder()
                    .authorName(firstBook.getAuthor().getAuthorName())
                    .bookImgPath(firstBook.getBookImage())
                    .bookIsbn(firstBook.getBookIsbn())
                    .bookTitle(firstBook.getBookTitle())
                    .build());
            if (setting==0 && recommend.size() >= 3) {
                break;
            }
            Book secondBook = bookRepository.findByBookIsbn(coverDataDto.getItem2());
            recommend.add(RecomResDto.builder()
                    .authorName(secondBook.getAuthor().getAuthorName())
                    .bookImgPath(secondBook.getBookImage())
                    .bookIsbn(secondBook.getBookIsbn())
                    .bookTitle(secondBook.getBookTitle())
                    .build());
            if (setting==0 && recommend.size() >= 5) {
                break;
            }
        }

        result.put("recommendType","bookCover");
        result.put("recommend", recommend);
        return result;



    }

    @Override
    public HashMap<String, Object> getBookRecom(String type, String username) {
        HashMap<String, Object> result = new HashMap<>();
        User user = userRepository.findByUsername(username);
        List<String> items = requestTools.getRecombooks(type, user);

        if (items == null) {
            return null;
        }
        // items에서 책 디테일 뽑아서 주기
        List<RecomResDto> data = new ArrayList<>();
        for (String item : items) {
            Book book = bookRepository.findByBookIsbn(item);
            if (book == null) {log.info("해당 책이 없습니다."); continue;}
            RecomResDto recomResDto = RecomResDto.builder()
                    .bookIsbn(book.getBookIsbn())
                    .bookTitle(book.getBookTitle())
                    .bookImgPath(book.getBookImage())
                    .authorName(null)
                    .build();
            try {
                String author = book.getAuthor().getAuthorName();
                recomResDto.setAuthorName(author);
            } catch (Exception e) {

            }
            log.info("등록한 책 : " + recomResDto.toString());
            data.add(recomResDto);
        }
        result.put("data", data);
        result.put("message", "success");
        return result;
    }

}
