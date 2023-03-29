package com.booklet.authservice.entity;

import javax.persistence.*;

@Entity
@Table(name="tb_user_hashtag")
public class UserHashtag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userHashtagId;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="hashtag_id")
    private Hashtag hashtag;
}