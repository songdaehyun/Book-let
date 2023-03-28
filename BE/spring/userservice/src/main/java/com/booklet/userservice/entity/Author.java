package com.booklet.userservice.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="author")
public class Author {
    @Id
    private Long authorId;

    private String authorName;
}
