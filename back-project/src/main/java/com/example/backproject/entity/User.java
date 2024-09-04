package com.example.backproject.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true, length = 50)
    private String username;

    @Column(nullable = false, length = 255)
    private String password;

    @Column(nullable = false, length = 100)
    private String email;

    @Column(nullable = false, length = 255)
    private String address;

    @Column(length = 255)
    private String detailedAddress;

    @Column(nullable = false, length = 20)
    private String phone;

    @Column(length = 50)
    private String signupMethod;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime created_at;

    @Column(nullable = false)
    private Integer grade = 0;

    @Column(length = 255)
    private String token;

    @PrePersist
    protected void onCreate() {
        created_at = LocalDateTime.now();
    }

}
