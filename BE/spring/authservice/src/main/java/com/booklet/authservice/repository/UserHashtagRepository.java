package com.booklet.authservice.repository;

import com.booklet.authservice.entity.UserHashtag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserHashtagRepository extends JpaRepository<UserHashtag, Long> {
    List<UserHashtag> findAllByUserHashtagId(Long userId);
}
