package com.booklet.bookservice.service;

import com.booklet.bookservice.dto.ReviewDto;
import com.booklet.bookservice.dto.ReviewListDto;
import com.booklet.bookservice.dto.UserDto;
import com.booklet.bookservice.entity.Book;
import com.booklet.bookservice.entity.Review;
import com.booklet.bookservice.entity.User;
import com.booklet.bookservice.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class ReviewServiceImpl implements ReviewService{
    private final ReviewRepository reviewRepository;

    @Override
    public Review findReviewEntity(Long reviewId) {
        return null;
    }

    @Override
    public HashMap<String, Object> findReviews(Book book, Pageable pageable) {
//        try {
//            Slice<Review> reviews = reviewRepository.findReviewByBook(book, pageable);
//
//
//            return result;
//        } catch (Exception e) {
//            e.printStackTrace();
//            return null;
//        }
        return null;
    }

    @Override
    @Transactional
    public boolean saveReview(ReviewDto reviewDto) {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setAmbiguityIgnored(true);
        // 리뷰 정보
        Review review = new ModelMapper().map(reviewDto, Review.class);
        Long reviewId = reviewRepository.save(review).getReviewId();
        if(reviewId>0) return true;
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
