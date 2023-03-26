package com.booklet.bookservice.repository;

import com.booklet.bookservice.entity.Book;
import com.booklet.bookservice.entity.Review;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    Slice<Review> findReviewByBook(Book book, Pageable pageable);

}

