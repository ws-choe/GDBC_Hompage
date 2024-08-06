package com.example.backproject.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "comments")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, name = "postId")
    private Integer postId;

    @Column(nullable = false, name = "authorId")
    private Integer authorId;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(name = "createdAt", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    @ManyToOne
    @JoinColumn(name = "postId", insertable = false, updatable = false)
    private Post post;

    @ManyToOne
    @JoinColumn(name = "authorId", insertable = false, updatable = false)
    private User author;
}
