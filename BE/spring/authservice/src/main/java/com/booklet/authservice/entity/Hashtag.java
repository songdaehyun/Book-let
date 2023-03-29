package com.booklet.authservice.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="hashtag")
public class Hashtag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hashtagId;

    private String hashtagName;

    @OneToMany(mappedBy = "hashtag")
    private List<UserHashtag> userHashtags = new ArrayList<>();

}
