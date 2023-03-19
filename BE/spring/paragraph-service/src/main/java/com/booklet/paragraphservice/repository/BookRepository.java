package com.booklet.paragraphservice.repository;

import com.booklet.paragraphservice.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, String> {
}
