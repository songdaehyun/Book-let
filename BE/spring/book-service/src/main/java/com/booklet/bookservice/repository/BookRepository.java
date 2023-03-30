package com.booklet.bookservice.repository;

import com.booklet.bookservice.dto.AuthorBookDto;
import com.booklet.bookservice.dto.BookSearchRes;
import com.booklet.bookservice.entity.Book;
import org.apache.commons.lang.text.StrTokenizer;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, String> {

     Slice<Book> findByBookTitleContaining(String title, Pageable pageable);
     @Query("select new com.booklet.bookservice.dto.AuthorBookDto(b.bookImage, b.bookTitle, b.bookIsbn) from Book b where b.author.authorId=:authorId order by rand() limit 5")
     List<AuthorBookDto> findBooksByAuthor(Long authorId);
     @Query("select new com.booklet.bookservice.dto.AuthorBookDto(b.bookImage, b.bookTitle, b.bookIsbn) from Book b where b.bookPublisher=:publisher order by rand() limit 5")
     List<AuthorBookDto> findBooksByBookPublisher(String publisher);
}
