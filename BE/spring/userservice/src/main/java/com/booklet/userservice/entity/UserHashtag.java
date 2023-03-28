package com.booklet.userservice.entity;

import javax.persistence.*;

@Entity
public class UserHashtag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userHashtagId;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="hashtag_id")
    private Hashtag hashtag;
}
