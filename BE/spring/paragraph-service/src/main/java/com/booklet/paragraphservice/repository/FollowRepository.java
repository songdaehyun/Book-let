package com.booklet.paragraphservice.repository;

import com.booklet.paragraphservice.entity.Follow;
import com.booklet.paragraphservice.entity.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Long> {

    @Query("select f.following from Follow f where f.follower=:user")
    Slice<User> findFollowByUser(User user, Pageable pageable); // User가 팔로우 하고 있는 사람들 목록 찾기
}
