package com.booklet.userservice.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true, length = 12)
    private String username;

    private String password;

    private String role;

    @CreationTimestamp
    private LocalDateTime createdDate;

    @Column(unique = true)
    private String email;

    @Column(unique = true, length = 12)
    private String nickname;

    private Integer type;

    private Integer age;

    private Integer sex;

    private float preferScore;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private UserImg userImg;

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<UserHashtag> userHashtags = new ArrayList<>();



    @ManyToMany(fetch = FetchType.LAZY) // 다대다 관계를 나타냄, LAZY 로딩
    @JoinTable(name = "user_follows", // 조인 테이블 지정
            joinColumns = @JoinColumn(name = "user_id"), // user_follows 테이블의 user_id 컬럼과 연결
            inverseJoinColumns = @JoinColumn(name = "followed_user_id")) // user_follows 테이블의 followed_user_id 컬럼과 연결
    private Set<User> followedUsers = new HashSet<>(); // 팔로우하는 사용자들

    // 팔로우 기능 구현
    public void follow(User user) {
        followedUsers.add(user); // 해당 사용자를 팔로우하는 사용자 리스트에 추가
        user.getFollowers().add(this); // 해당 사용자의 팔로워 리스트에 자신을 추가
    }

    // 언팔로우 기능 구현
    public void unfollow(User user) {
        followedUsers.remove(user); // 해당 사용자를 팔로우하는 사용자 리스트에서 제거
        user.getFollowers().remove(this); // 해당 사용자의 팔로워 리스트에서 자신을 제거
    }

    @ManyToMany(mappedBy = "followedUsers", fetch = FetchType.LAZY) // 다대다 관계를 나타냄, mappedBy로 연관관계 주인이 아닌 엔티티의 필드를 사용
    private Set<User> followers = new HashSet<>(); // 팔로워들

    // getters and setters omitted for brevity
}
