package com.booklet.authservice.entity;

import javax.persistence.*;

@Entity
@Table(name="user_image")
public class UserImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imgId;

    private String imgName;

    private String imgPath;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}
