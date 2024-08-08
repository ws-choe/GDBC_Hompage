package com.example.backproject.config;

import com.example.backproject.service.UserService;
import com.example.backproject.util.JwtUtil;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;


@Configuration
public class JwtRequestFilterConfig {

    @Bean
    public JwtRequestFilter jwtRequestFilter(@Lazy UserService userService, JwtUtil jwtUtil) {
        return new JwtRequestFilter(userService, jwtUtil);
    }
}
