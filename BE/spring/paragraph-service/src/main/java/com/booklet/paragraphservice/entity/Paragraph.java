package com.booklet.paragraphservice.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@Table(name="paragraph")
public class Paragraph extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="paragraph_id")
    private Long paragraphId;

    @Column(length = 301, nullable = false)
    private String paragraphContent;
    @Column
    private String paragraphColor;

    @Column
    private int paragraphPage;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="book_isbn")
    private Book book;

    @OneToMany(mappedBy = "paragraph") //FK 없는 쪽에 mapped by 리더
    private List<Comment> comments = new ArrayList<>();

    @Builder
    public Paragraph( User user,Book book,String paragraphColor,int paragraphPage, String paragraphContent){

        this.user = user;
        this.paragraphContent = paragraphContent;
        this.paragraphColor = paragraphColor;
        this.paragraphPage = paragraphPage;

        this.book = book;
    }

}
