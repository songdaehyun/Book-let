package com.booklet.userservice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BookImg {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookImgId;

    private String fimg
}
