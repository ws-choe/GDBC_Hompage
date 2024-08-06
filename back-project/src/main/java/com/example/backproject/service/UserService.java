package com.example.backproject.service;

import com.example.backproject.dto.EmailDto;
import com.example.backproject.entity.PasswordResetToken;
import com.example.backproject.entity.User;
import com.example.backproject.repository.PasswordResetTokenRepository;
import com.example.backproject.repository.UserRepository;
import com.example.backproject.util.JwtUtil;
import jakarta.mail.MessagingException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private final UserRepository userRepository;
    private final PasswordResetTokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final EmailService emailService;


    @Autowired
    public UserService(UserRepository userRepository, PasswordResetTokenRepository tokenRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil, EmailService emailService) {
        this.userRepository = userRepository;
        this.tokenRepository = tokenRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
        this.emailService = emailService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));

        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .roles("USER")
                .build();
    }

    public User register(User user) throws Exception {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new Exception("이미 존재하는 사용자입니다.");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        String token = jwtUtil.generateToken(user.getUsername());
        user.setToken(token);
        // 이메일 발송 로직 추가
        sendTokenEmail(user.getEmail(), token);

        return userRepository.save(user);

    }

    private void sendTokenEmail(String email, String token) {
        EmailDto emailDto = new EmailDto();
        emailDto.setTo(email);
        emailDto.setSubject("로그인 토큰 발행");
        emailDto.setText("회원가입해 주셔서 감사합니다. 다음 토큰을 사용하여 인증을 완료하세요: " + token);

        try {
            emailService.sendMail(emailDto);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

    private void sendTokenEmailChange(String email, String token) {
        EmailDto emailDto = new EmailDto();
        emailDto.setTo(email);
        emailDto.setSubject("로그인 토큰 재발행");
        emailDto.setText("로그인 토큰이 재발행되었습니다. 다음 토큰을 사용하여 인증을 완료하세요: " + token);

        try {
            emailService.sendMail(emailDto);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

    public User login(String username, String password) throws Exception {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new Exception("사용자가 존재하지 않습니다."));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new Exception("비밀번호가 일치하지 않습니다.");
        }

        String token = jwtUtil.generateToken(username);
        user.setToken(token);
        userRepository.save(user);

        return user;
    }

    public String createPasswordResetTokenForUser(String email) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            String token = UUID.randomUUID().toString();
            PasswordResetToken myToken = PasswordResetToken.builder()
                    .token(token)
                    .user(user)
                    .expiryDate(LocalDateTime.now().plusHours(24))  // 토큰 유효기간 24시간
                    .build();
            tokenRepository.save(myToken);
            return token;
        }
        return null;
    }

    public boolean validatePasswordResetToken(String token) {
        Optional<PasswordResetToken> optionalToken = tokenRepository.findByToken(token);
        if (optionalToken.isPresent()) {
            PasswordResetToken passToken = optionalToken.get();
            return !passToken.getExpiryDate().isBefore(LocalDateTime.now());
        }
        return false;
    }

    public User getUserByPasswordResetToken(String token) {
        Optional<PasswordResetToken> optionalToken = tokenRepository.findByToken(token);
        return optionalToken.map(PasswordResetToken::getUser).orElse(null);
    }

    @Transactional
    public void changeUserPassword(User user, String newPassword) {
        String encodedNewPassword = passwordEncoder.encode(newPassword);
        user.setPassword(encodedNewPassword);
        String token = jwtUtil.generateToken(user.getUsername());
        user.setToken(token);

        sendTokenEmailChange(user.getEmail(), token);

        userRepository.save(user);

        PasswordResetToken resetToken = tokenRepository.findByUser(user);
        if (resetToken != null) {
            tokenRepository.deleteByToken(resetToken.getToken());
        }
    }

    public void deletePasswordResetToken(String token) {
        tokenRepository.deleteByToken(token);
    }
}
