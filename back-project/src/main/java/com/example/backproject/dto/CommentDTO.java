package com.example.backproject.dto;

import java.time.LocalDateTime;

import com.example.backproject.entity.Post;
import com.example.backproject.entity.User;
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
