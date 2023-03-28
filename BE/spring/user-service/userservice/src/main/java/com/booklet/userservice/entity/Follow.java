package com.booklet.userservice.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Follow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long followId;

    @ManyToOne
    @JoinColumn(name = "followings")
    private List<User> followings;

    @ManyToOne
    @JoinColumn(name = "follower")
    private List<User> followers;
}
