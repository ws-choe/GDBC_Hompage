package com.example.backproject.entity.announcement;

import com.example.backproject.entity.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "employmentcomments")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmploymentPostComment {
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
    @JsonBackReference // 직렬화 시, 순환 참조 방지
    private EmploymentPost post;

    @ManyToOne
    @JoinColumn(name = "authorId", insertable = false, updatable = false)
    private User author;

}
