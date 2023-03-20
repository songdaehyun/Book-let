package com.booklet.paragraphservice.repository;

import com.booklet.paragraphservice.dto.ParagraphDto;
import com.booklet.paragraphservice.dto.ParagraphListDto;
import com.booklet.paragraphservice.entity.Paragraph;
import com.booklet.paragraphservice.entity.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ParagraphRepository extends JpaRepository<Paragraph, Long> {
    Slice<Paragraph> findParagraphByUser(User user,Pageable pageable);
}
