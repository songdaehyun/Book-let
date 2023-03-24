package com.booklet.authservice.entity;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true, length = 12)
    private String username;

    private String password;

    private String role;

    @CreationTimestamp
    private LocalDateTime createdDate;

    @Column(unique = true)
    private String email;

    @Column(unique = true, length = 12)
    private String nickname;

    private Integer type;

    private Integer age;

    private Integer sex;

}
