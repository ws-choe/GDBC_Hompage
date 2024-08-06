package com.example.backproject.dto;

import lombok.Data;

@Data
public class EmailDto {
    private String to;
    private String subject;
    private String text;

    public EmailDto(){}

    public EmailDto(String to, String subject, String text){
        this.to = to;
        this.subject = subject;
        this.text = text;
    }

}
