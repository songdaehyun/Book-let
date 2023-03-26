package com.booklet.bookservice.service;

import com.booklet.bookservice.entity.Book;
import com.booklet.bookservice.entity.Review;
import com.booklet.bookservice.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;

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
        return null;
    }

    @Override
    public boolean saveReview() {
        return false;
    }

    @Override
    public boolean updateReview(Long reviewId) {
        return false;
    }

    @Override
    public boolean deleteReview(Long reviewId) {
        return false;
    }
}
