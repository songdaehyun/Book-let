package com.booklet.authservice.repository;

import com.booklet.authservice.entity.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Long> {
    List<Follow> findAllByFollowing(long Following_id);
    List<Follow> findAllByFollower(long Follower_id);
    Follow findByFollowerAndFollowing(long Follower_id, long Following_id);
}
