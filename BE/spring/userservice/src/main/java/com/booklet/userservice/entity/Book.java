package com.booklet.userservice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String bookIsbn;

    private String bookTitle;

    private String bookPublisher;

    private Integer bookPrice;

    private String bookDescription;

    private float bookScore;

    private float bookGrade;
}
