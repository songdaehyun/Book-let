package com.booklet.authservice.repository;

import com.booklet.authservice.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, String> {
    Book findByBookIsbn(String bookIsbn);
    Slice<Book> findAllBy(Pageable pageable);
}
