package com.booklet.bookservice.repository;

import com.booklet.bookservice.entity.BookLikes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookLikesRepository extends JpaRepository<BookLikes, Long> {
    @Query("select bl from BookLikes bl where bl.book.bookIsbn=:bookIsbn and bl.user.userId=:userId")
    public Optional<BookLikes> findByUserIdAndParagraphId(Long userId, String bookIsbn);

}
