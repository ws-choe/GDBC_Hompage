package com.example.backproject.entity.project;

import com.example.backproject.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "presentation")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Presentation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(nullable = false)
    private Integer userId;

    @Column(nullable = false)
    @Builder.Default
    private Integer views = 0;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime created_at;

    @Column(length = 255)
    private String imagePath;

    @Column(length = 255)
    private String imagePath2;

    @Column(length = 255)
    private String imagePath3;

    @Column(length = 255)
    private String imagePath4;

    @PrePersist
    protected void onCreate() {
        created_at = LocalDateTime.now();
    }

    @ManyToOne
    @JoinColumn(name = "userId", insertable = false, updatable = false)
    private User user;

}

