package com.example.backproject.entity.announcement;

import com.example.backproject.entity.User;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

//문의게시판
@Entity
@Table(name = "qnaposts")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QnaPost {
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

    @PrePersist
    protected void onCreate() {
        created_at = LocalDateTime.now();
    }

    @JsonManagedReference // 직렬화 시, 순환 참조 방지
    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<QnaPostComment> comments = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "userId", insertable = false, updatable = false)
    private User user;
}
