package com.example.backproject.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PostDTO {
    private Integer id;
    private String title;
    private String content;
    private Integer views;
    private LocalDateTime createdAt;
    private String imagePath;
    private UserDTO username;
}
