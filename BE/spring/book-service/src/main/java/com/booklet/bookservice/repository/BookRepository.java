package com.booklet.bookservice.repository;

import com.booklet.bookservice.dto.BookSearchRes;
import com.booklet.bookservice.entity.Book;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, String> {
    public Slice<BookSearchRes> findByBookTitleContaining(String bookTitle, Pageable pageable);
}
