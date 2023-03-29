package com.booklet.bookservice.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@Table(name="book")
public class Book {
    @Id
    @Column(name="book_isbn")
    String bookIsbn;

    @Column
    String bookTitle;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="author_id")
    private Author author;
    @Column
    String bookImage;
    @OneToMany(mappedBy = "book") //FK 없는 쪽에 mapped by 리더
    private List<Review> reviews = new ArrayList<>();

}
