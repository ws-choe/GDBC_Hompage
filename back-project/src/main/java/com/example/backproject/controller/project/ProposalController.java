package com.example.backproject.controller.project;


import com.example.backproject.entity.project.Proposal;
import com.example.backproject.service.project.ProposalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/proposal")
public class ProposalController {

    @Autowired
    private ProposalService postService;

    @Value("${upload.path}")
    private String uploadPath;

    @PostMapping
    public ResponseEntity<?> createPost(@RequestParam("title") String title,
                                        @RequestParam("content") String content,
                                        @RequestParam("userId") Integer userId,
                                        @RequestParam(value = "image", required = false) MultipartFile image) {
        String imagePath = null;

        if (image != null) {
            imagePath = saveImage(image);
        }

        Proposal post = Proposal.builder()
                .title(title)
                .content(content)
                .userId(userId)
                .views(0)
                .imagePath(imagePath)
                .build();
        Proposal createdPost = postService.createPost(post);

        return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePost(@PathVariable("id") Integer id,
                                        @RequestParam("title") String title,
                                        @RequestParam("content") String content,
                                        @RequestParam(value = "image", required = false) MultipartFile image,
                                        @RequestParam(value = "removeImage", required = false) Boolean removeImage) {
        // 기존 게시물 조회
        Proposal existingPost = postService.getPostById(id);
        if (existingPost == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Post not found with id: " + id);
        }

        // 새로운 이미지가 업로드되었는지 확인
        String imagePath = existingPost.getImagePath(); // 기존 이미지 경로를 기본으로 설정

        if (image != null) {
            // 새 이미지가 업로드된 경우 기존 이미지 삭제 후 새 이미지 저장
            if (imagePath != null) {
                deleteImage(imagePath);
            }
            imagePath = saveImage(image);
        } else if (removeImage != null && removeImage) {
            // 이미지 제거 요청이 있으면 기존 이미지 삭제
            if (imagePath != null) {
                deleteImage(imagePath);
            }
            imagePath = null; // 이미지 경로를 null로 설정
        }

        // 업데이트할 게시물 세부 정보 설정
        Proposal postDetails = Proposal.builder()
                .title(title)
                .content(content)
                .imagePath(imagePath)
                .build();

        // 게시물 업데이트
        Proposal updatedPost = postService.updatePost(id, postDetails, removeImage);

        return ResponseEntity.ok(updatedPost);
    }


    private String saveImage(MultipartFile image) {
        String filename = UUID.randomUUID().toString() + "_" + image.getOriginalFilename();
        Path savePath = Paths.get(uploadPath, filename);

        try {
            if (!Files.exists(savePath.getParent())) {
                Files.createDirectories(savePath.getParent());
            }
            image.transferTo(savePath.toFile());
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to save image", e);
        }

        return filename;
    }

    private void deleteImage(String imagePath) {
        Path filePath = Paths.get(uploadPath, imagePath);
        try {
            Files.deleteIfExists(filePath);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to delete image", e);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePost(@PathVariable("id") Integer id) {
        postService.deletePost(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}/view")
    public ResponseEntity<?> incrementViews(@PathVariable("id") Integer id) {
        postService.incrementViews(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<?> getAllPosts(@RequestParam(value = "page", defaultValue = "1") Integer page) {
        int limit = 10;
        Page<Proposal> postPage = postService.getAllPosts(page, limit);
        Map<String, Object> response = new HashMap<>();
        response.put("posts", postPage.getContent());
        response.put("totalPages", postPage.getTotalPages());
        response.put("currentPage", page);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPostById(@PathVariable("id") Integer id) {
        Proposal post = postService.getPostById(id);
        return ResponseEntity.ok(post);
    }
}
