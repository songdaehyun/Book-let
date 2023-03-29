package com.booklet.userservice.entity;

import javax.persistence.*;

@Entity
@Table(name="author")
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long authorId;

    private String authorName;
}
