package com.booklet.userservice.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Hashtag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hastagId;

    private String hashtagName;
    @JsonIgnore
    @OneToMany(mappedBy = "hashtag", cascade = CascadeType.ALL)
    private List<UserHashtag> userHashtags = new ArrayList<>();

}
