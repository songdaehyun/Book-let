package com.booklet.paragraphservice.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@NoArgsConstructor
@Table(name="book")
public class Book {
    @Id
    @Column
    String bookIsbn;

    @Column
    String bookTitle;

    @Column
    String bookAuthor;
    @Column
    String bookImage;

}
