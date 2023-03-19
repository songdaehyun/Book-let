package com.booklet.paragraphservice.repository;

import com.booklet.paragraphservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
