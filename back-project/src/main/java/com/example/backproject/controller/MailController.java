package com.example.backproject.controller;

import com.example.backproject.dto.EmailDto;
import com.example.backproject.entity.User;
import com.example.backproject.service.EmailService;
import com.example.backproject.service.UserService;
import jakarta.mail.MessagingException;
import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/user")
//@CrossOrigin(origins = "http://localhost:8080")
public class MailController {

    private final UserService userService;
    private final EmailService emailService;

    // 생성자를 통해 의존성 주입
    public MailController(UserService userService, EmailService emailService) {
        this.userService = userService;
        this.emailService = emailService;
    }

    @PostMapping("/reset-password")
    public ResponseEntity<Map<String, String>> resetPassword(@RequestBody Map<String, String> request) {
        Map<String, String> response = new HashMap<>();
        String email = request.get("email");
        if (email == null) {
            response.put("message", "이메일을 입력해주세요.");
            return ResponseEntity.badRequest().body(response);
        }

        String token = userService.createPasswordResetTokenForUser(email);
        if (token != null) {
            EmailDto emailDto = new EmailDto(email, "Password Reset Request",
                    "패스워드 재설정해 주세요. 접속 링크:\n" +
                            "http://localhost:80/user/change-password?token=" + token);
            try {
                emailService.sendMail(emailDto);
                response.put("message", "요청 완료.");
            } catch (MessagingException e) {
                response.put("message", "전송 오류 발생. 다시 시도해 주세요.");
                e.printStackTrace();
            }
        } else {
            response.put("message", "이메일 주소가 존재하지 않습니다.");
        }
        return ResponseEntity.ok(response);
    }

    @PostMapping("/change-password")
    public ResponseEntity<Map<String, String>> changePassword(@RequestBody Map<String, String> request) {
        Map<String, String> response = new HashMap<>();
        String token = request.get("token");
        String newPassword = request.get("newPassword");

        if (userService.validatePasswordResetToken(token)) {
            User user = userService.getUserByPasswordResetToken(token);
            if (user != null) {
                userService.changeUserPassword(user, newPassword);
                userService.deletePasswordResetToken(token);
                response.put("message", "패스워드 변경 완료.");
                response.put("redirect", "/login");
                return ResponseEntity.ok(response);
            } else {
                response.put("message", "유효하지 않은 사용자입니다.");
                return ResponseEntity.badRequest().body(response);
            }
        } else {
            response.put("message", "토큰이 유효하지 않습니다.");
            return ResponseEntity.badRequest().body(response);
        }
    }


    @GetMapping("/change-password")
    public String showChangePasswordPage(@RequestParam("token") String token, Model model) {
        // 토큰을 모델에 추가하는 대신, 토큰을 URL 파라미터로 유지
        return "forward:/index.html";
    }


    @Transactional
    @DeleteMapping("/delete-token")
    public ResponseEntity<Map<String, String>> deleteToken(@RequestParam(required = false) String token) {
        Map<String, String> response = new HashMap<>();

        if (token == null) {
            response.put("message", "토큰이 필요합니다.");
            return ResponseEntity.badRequest().body(response);
        }

        if (userService.validatePasswordResetToken(token)) {
            userService.deletePasswordResetToken(token);
            response.put("message", "토큰 삭제 완료.");
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "토큰이 유효하지 않습니다.");
            return ResponseEntity.badRequest().body(response);
        }
    }

}
