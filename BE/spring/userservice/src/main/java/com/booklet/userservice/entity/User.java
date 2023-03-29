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

}
