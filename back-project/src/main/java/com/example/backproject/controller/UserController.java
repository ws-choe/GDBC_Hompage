package com.example.backproject.controller;

import com.example.backproject.entity.User;
import com.example.backproject.service.UserService;
import com.example.backproject.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final JwtUtil jwtUtil;

    // 회원가입
    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody User user) {
        Map<String, String> response = new HashMap<>();

        try {
            User registeredUser = userService.register(user);
            if (registeredUser != null) {
                response.put("message", "회원가입에 성공했습니다.");
                response.put("token", registeredUser.getToken()); // 생성된 토큰 추가
                return ResponseEntity.ok(response);
            } else {
                response.put("message", "회원가입에 실패했습니다.");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.put("message", "오류가 발생했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();

        try {
            User loggedInUser = userService.login(user.getUsername(), user.getPassword());

            if (loggedInUser != null) {
                String token = jwtUtil.generateToken(loggedInUser.getUsername());
                response.put("message", "로그인에 성공했습니다.");
                response.put("id", loggedInUser.getId());
                response.put("username", loggedInUser.getUsername());
                response.put("grade", loggedInUser.getGrade());
                response.put("token", token); // JWT 토큰
                return ResponseEntity.ok(response);
            } else {
                response.put("message", "아이디 또는 비밀번호가 일치하지 않습니다.");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.put("message", "오류가 발생했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    // 로그아웃
    @PostMapping("/logout")
    public ResponseEntity<Map<String, String>> logout() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "로그아웃 성공.");
        return ResponseEntity.ok(response);
    }
}
