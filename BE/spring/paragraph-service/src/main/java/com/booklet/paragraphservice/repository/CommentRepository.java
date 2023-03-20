package com.booklet.paragraphservice.repository;

import com.booklet.paragraphservice.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    @Query("select count(*) from Comment c where c.paragraph.paragraphId = :paragraphId")
    public int countByParagraphId(Long paragraphId);
}
