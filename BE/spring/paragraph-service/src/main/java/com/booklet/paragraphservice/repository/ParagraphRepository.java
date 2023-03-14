package com.booklet.paragraphservice.repository;

import com.booklet.paragraphservice.entity.Paragraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParagraphRepository extends JpaRepository<Paragraph, Long> {

}
