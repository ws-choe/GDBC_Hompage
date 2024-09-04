package com.example.backproject.dto;

import java.time.LocalDateTime;

import com.example.backproject.entity.announcement.Post;
import com.example.backproject.entity.User;

import jakarta.persistence.PrePersist;

public class CommentDTO {
	private Integer id;
    private String content;

    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    
    private Post post;

    private User author;
}
