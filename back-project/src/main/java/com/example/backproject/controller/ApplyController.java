package com.example.backproject.controller;

import com.example.backproject.dto.EmailDto;
import com.example.backproject.entity.Apply;
import com.example.backproject.service.ApplyService;
import com.example.backproject.service.EmailService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/apply")
public class ApplyController {
    @Autowired
    private ApplyService applyService;

    @Autowired
    private EmailService emailService;

    @Value("/var/applyUpload")
    private String uploadPath;

    @PostMapping
    public ResponseEntity<Apply> createApply(
            @ModelAttribute Apply apply,
            @RequestParam("file1") MultipartFile file1,
            @RequestParam("file2") MultipartFile file2) {

        // 파일 저장
        String file1Path = saveImage(file1);
        String file2Path = saveImage(file2);

        apply.setFile1Path(file1Path);
        apply.setFile2Path(file2Path);

        Apply savedApply = applyService.saveApply(apply);

        // 이메일 전송
        EmailDto emailDto = new EmailDto();
        emailDto.setTo("sinsaki7986@gmail.com"); // 관리자의 이메일 주소
        emailDto.setSubject(String.format("%s님 입학 신청서",apply.getName()));
        emailDto.setText(String.format("신청서가 제출되었습니다:\n\n이름: %s\n이메일: %s\n전화번호: %s\n",
                apply.getName(), apply.getEmail(), apply.getPhone()));
        emailDto.setAttachments(new String[]{file1Path, file2Path});

        try {
            emailService.sendMail(emailDto); // 이메일 전송
        } catch (MessagingException e) {
            e.printStackTrace();
            // 필요한 경우 적절한 오류 처리를 추가할 수 있습니다.
        }
        return new ResponseEntity<>(savedApply, HttpStatus.CREATED);
    }

    private String saveImage(MultipartFile image) {
        String originalFilename = image.getOriginalFilename();
        Path savePath = Paths.get(uploadPath, originalFilename);

        try {
            if (!Files.exists(savePath.getParent())) {
                Files.createDirectories(savePath.getParent());
            }
            image.transferTo(savePath.toFile());
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to save image", e);
        }

        return savePath.toString(); // 저장된 파일 경로를 반환
    }
}

