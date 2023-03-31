package com.booklet.recomservice.repository;

import com.booklet.recomservice.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, String> {
    Book findByBookIsbn(String bookIsbn);
}
