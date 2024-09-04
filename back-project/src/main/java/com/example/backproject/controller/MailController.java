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
import java.util.Optional;

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

        // 이메일로 사용자 조회
        Optional<User> optionalUser = userService.getUserByEmail(email);
        if (!optionalUser.isPresent()) {
            response.put("message", "이메일 주소가 존재하지 않습니다.");
            return ResponseEntity.badRequest().body(response);
        }

        User user = optionalUser.get();
        String token = userService.createPasswordResetTokenForUser(email);
        if (token != null) {
            String emailBody = String.format("<html>" +
                            "<body style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333;\">" +
                            "    <div style=\"max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; background-color: #f9f9f9;\">" +
                            "        <div style=\"text-align: center; padding: 10px;\">" +
                            "            <h2 style=\"color: #4CAF50;\">비밀번호 변경 안내</h2>" +
                            "        </div>" +
                            "        <p>안녕하세요, 회원님.</p>" +
                            "        <p>귀하의 아이디는 <b>%s</b>입니다.</p>" +
                            "        <p>비밀번호 변경 요청을 접수하였습니다. 아래 링크를 클릭하시면 비밀번호 재설정 페이지로 이동하실 수 있습니다.</p>" +
                            "        <p><a href=\"http://210.117.212.60:80/user/change-password?token=%s\" target=\"_blank\" style=\"color: #4CAF50; text-decoration: none;\">비밀번호 변경하기</a></p>" +
                            "        <p>이메일을 통해 요청하신 경우에만 이 링크를 사용해 주시기 바랍니다. 링크는 24시간 동안 유효합니다.</p>" +
                            "        <div style=\"font-size: 0.9em; color: #777; text-align: center; margin-top: 20px;\">" +
                            "            <p>감사합니다.</p>" +
                            "            <p>구로디지털부트캠프</p>" +
                            "        </div>" +
                            "    </div>" +
                            "</body>" +
                            "</html>",
                    user.getUsername(), token);

            EmailDto emailDto = new EmailDto(email, "[구로디지털부트캠프] 비밀번호 변경 안내", emailBody);
            try {
                emailService.sendMail(emailDto);
                response.put("message", "요청 완료.");
                response.put("userName", user.getUsername());
            } catch (MessagingException e) {
                response.put("message", "전송 오류 발생. 다시 시도해 주세요.");
                e.printStackTrace();
            }
        } else {
            response.put("message", "토큰 생성에 실패했습니다.");
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
