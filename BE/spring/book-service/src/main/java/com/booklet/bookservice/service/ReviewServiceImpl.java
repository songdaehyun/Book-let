package com.booklet.bookservice.service;

import com.booklet.bookservice.dto.ReviewDto;
import com.booklet.bookservice.dto.ReviewListDto;
import com.booklet.bookservice.dto.UserDto;
import com.booklet.bookservice.entity.Book;
import com.booklet.bookservice.entity.Review;
import com.booklet.bookservice.entity.User;
import com.booklet.bookservice.repository.BookRepository;
import com.booklet.bookservice.repository.ReviewRepository;
import com.booklet.bookservice.repository.UserImageRepository;
import com.booklet.bookservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class ReviewServiceImpl implements ReviewService{
    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final BookRepository bookRepository;
    private final UserImageRepository userImageRepository;

    @Override
    public Review findReviewEntity(Long reviewId) {
        return reviewRepository.findById(reviewId).orElseGet(Review::new);
    }

    @Override
    public HashMap<String, Object> findReviews(Book book, Long userId, Pageable pageable) { // 책의 리뷰 리스트
        HashMap<String, Object> result = new HashMap<>();
        User me = userRepository.findById(userId).orElseGet(User::new);
        List<ReviewListDto> listDto = new ArrayList<>();
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setAmbiguityIgnored(true);
        Slice<Review> reviews = reviewRepository.findReviewByBook(book, pageable);
        Review myReview = reviewRepository.findReviewByUserAndBook(me, book).orElseGet(Review::new);
        if(myReview.getReviewId()!=null){
            result.put("reviewed", true);
        }else if(myReview.getReviewId()==null){
            result.put("reviewed", false);
        }
        try {
            for(Review review : reviews){
                UserDto userDto = new ModelMapper().map(review.getUser(), UserDto.class);
                userDto.setUserImage(userImageRepository.findUserImageByUser(review.getUser()));
                listDto.add(new ReviewListDto(userDto, review.getReviewId(), review.getReviewContent(), review.getReviewGrade(), review.getCreatedDate()));
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        result.put("reviews", listDto);
        result.put("hasNextPage", reviews.hasNext());
        return result;
    }

    @Override
    @Transactional
    public boolean saveReview(ReviewDto req) {
        Long result = 0L;
        try {
            Book book = bookRepository.findById(req.getBookIsbn()).orElseGet(Book::new);
            if(book.getBookIsbn()==null) return false;
            Review review = Review.builder()
                    .reviewContent(req.getContent())
                    .reviewGrade(req.getGrade())
                    .book(book)
                    .user(userRepository.findById(req.getUserId()).orElse(null))
                    .build();
            setNewBookGrade(book, req.getGrade());
            result = reviewRepository.save(review).getReviewId();
        } catch (Exception e) {
            e.printStackTrace();
        }

        if(result>0) return true;
        return false;
    }

    @Override
    @Transactional
    public boolean updateReview(Review review) {
        try{
            reviewRepository.save(review);
        }catch(Exception e){
           return false;
        }
        return true;
    }

    @Override
    @Transactional
    public boolean deleteReview(Long reviewId) {
        try {
            reviewRepository.deleteById(reviewId);
        } catch (Exception e) {
//            log.info("error : {}", e.getStackTrace());
            return false;
        }
        return true;
    }

    private boolean setNewBookGrade(Book book, float newGrade){
        try{
            int ReviewCnt = reviewRepository.countByBook(book);
            if(ReviewCnt==0){
                if(book.getBookGrade()==0){
                    book.updateBookGrade(newGrade);
                    bookRepository.save(book);
                }else{
                    book.updateBookGrade((book.getBookGrade()+newGrade)/2);
                    bookRepository.save(book);
                }
            }else {
                float sum = book.getBookGrade() * ReviewCnt;
                sum += newGrade;
                book.updateBookGrade(sum / (ReviewCnt + 1));
            }
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
        return true;
    }
}
