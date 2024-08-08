package com.example.backproject.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class PostRequestDTO {
    private String title;
    private String content;
    private Integer userId;
    private MultipartFile image;
}
