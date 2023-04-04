package com.booklet.recomservice.repository;

import com.booklet.recomservice.entity.Paragraph;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParagraphRepository extends JpaRepository<Paragraph, Long> {
    Paragraph findByParagraphId(Long paragraphId);
}
