package com.booklet.authservice.repository;

import com.booklet.authservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
    User findByNickname(String nickname);
    User findByEmail(String email);
}
