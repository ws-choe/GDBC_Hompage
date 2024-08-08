package com.example.backproject.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private String password;
    private String username;
    private String address;
    private LocalDateTime created_at;
    private String email;
    private String phone;
}