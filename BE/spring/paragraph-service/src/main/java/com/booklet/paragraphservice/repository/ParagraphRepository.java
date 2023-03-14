package com.booklet.paragraphservice.repository;

import com.booklet.paragraphservice.entity.Paragraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ParagraphRepository extends JpaRepository<Paragraph, Long> {
//    Optional<Paragraph> findByParagraphId(Long paragraphId);
}
