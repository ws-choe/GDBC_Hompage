package com.example.backproject.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class EmailDto {
    private String to;
    private String subject;
    private String text;
    private MultipartFile[] attachments;

    // 기본 생성자
    public EmailDto() {}

    // attachments 포함한 생성자
    public EmailDto(String to, String subject, String text, MultipartFile[] attachments) {
        this.to = to;
        this.subject = subject;
        this.text = text;
        this.attachments = attachments;
    }

    // attachments 없는 생성자
    public EmailDto(String to, String subject, String text) {
        this.to = to;
        this.subject = subject;
        this.text = text;
        this.attachments = null;
    }
}
