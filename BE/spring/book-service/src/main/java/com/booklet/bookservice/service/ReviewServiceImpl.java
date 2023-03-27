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
        return null;
    }

    @Override
    public HashMap<String, Object> findReviews(Book book, Pageable pageable) { // 책의 리뷰 리스트
        List<ReviewListDto> listDto = new ArrayList<>();
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setAmbiguityIgnored(true);
        Slice<Review> reviews = reviewRepository.findReviewByBook(book, pageable);

        try {
            for(Review review : reviews){
                UserDto userDto = new ModelMapper().map(review.getUser(), UserDto.class);
                userDto.setUserImage(userImageRepository.findUserImageByUser(review.getUser()));
                listDto.add(new ReviewListDto(userDto, review.getReviewContent(), review.getReviewGrade(), review.getCreatedDate()));
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        HashMap<String, Object> result = new HashMap<>();
        result.put("reviews", listDto);
        result.put("hasNextPage", reviews.hasNext());
        return result;
    }

    @Override
    @Transactional
    public boolean saveReview(ReviewDto req) {
        Long result = 0L;
        try {
            Review review = Review.builder()
                    .reviewContent(req.getContent())
                    .reviewGrade(req.getGrade())
                    .book(bookRepository.findById(req.getBookIsbn()).orElse(null))
                    .user(userRepository.findById(req.getUserId()).orElse(null))
                    .build();
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
}
