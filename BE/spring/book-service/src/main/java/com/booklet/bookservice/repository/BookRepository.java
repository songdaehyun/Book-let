package com.booklet.bookservice.repository;

import com.booklet.bookservice.dto.BookSearchRes;
import com.booklet.bookservice.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, String> {
    @Query("select new com.booklet.bookservice.dto.BookSearchRes(b.bookIsbn, b.author.author_name,b.bookImage) from Book b where b.bookTitle=:bookTitle")
    public List<BookSearchRes> findBooksByBookTitle(String bookTitle);
}
