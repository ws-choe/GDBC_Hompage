package com.example.backproject.controller.project;


import com.example.backproject.entity.project.FinalReport;
import com.example.backproject.service.project.FinalReportService;
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
@RequestMapping("/finalreport")
public class FinalReportController {
    @Autowired
    private FinalReportService postService;

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

        FinalReport post = FinalReport.builder()
                .title(title)
                .content(content)
                .userId(userId)
                .views(0)
                .imagePath(imagePath)
                .build();
        FinalReport createdPost = postService.createPost(post);

        return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePost(@PathVariable("id") Integer id,
                                        @RequestParam("title") String title,
                                        @RequestParam("content") String content,
                                        @RequestParam(value = "image", required = false) MultipartFile image,
                                        @RequestParam(value = "origin", required = false) Boolean origin) {

        String imagePath = null;
        System.out.println("===========================");
        System.out.println(image);
        FinalReport postDetails;

        if (image!=null) {
            imagePath = saveImage(image);
        }
        postDetails = FinalReport.builder()
                .title(title)
                .content(content)
                .imagePath(imagePath)
                .build();

        FinalReport updatedPost = postService.updatePost(id, postDetails, origin);

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
        Page<FinalReport> postPage = postService.getAllPosts(page, limit);
        Map<String, Object> response = new HashMap<>();
        response.put("posts", postPage.getContent());
        response.put("totalPages", postPage.getTotalPages());
        response.put("currentPage", page);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPostById(@PathVariable("id") Integer id) {
        FinalReport post = postService.getPostById(id);
        return ResponseEntity.ok(post);
    }
}
