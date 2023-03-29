package com.booklet.authservice.entity;

import javax.persistence.*;

@Entity
@Table(name="follow")
public class Follow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long followId;

//    @ManyToOne
//    @JoinColumn(name = "followings")
//    private User followings;
//
//    @ManyToOne
//    @JoinColumn(name = "follower")
//    private User followers;
}
