package com.booklet.userservice.entity;

import javax.persistence.*;

public class Hashtag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hastagId;

    private String hashtagName;

}
