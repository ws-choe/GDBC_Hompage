package com.example.backproject.controller;

import com.example.backproject.entity.Post;
import com.example.backproject.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


//미구현(vue 컴포넌트 내 JS 코드에서 무한 재귀호출 문제로 한시 보류)
@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping
    public ResponseEntity<?> createPost(@RequestParam("title") String title,
                                        @RequestParam("content") String content,
                                        @RequestParam("userId") Integer userId,
                                        @RequestParam(value = "image", required = false) MultipartFile image) {
        String imagePath = image != null ? image.getOriginalFilename() : null;
        Post post = Post.builder()
                .title(title)
                .content(content)
                .userId(userId)
                .views(0)
                .imagePath(imagePath)
                .build();
        Post createdPost = postService.createPost(post);

        if (image != null) {
            // 이미지 저장 로직
        }

        return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePost(@PathVariable Integer id,
                                        @RequestParam("title") String title,
                                        @RequestParam("content") String content,
                                        @RequestParam(value = "image", required = false) MultipartFile image,
                                        @RequestParam(value = "removeImage", required = false) Boolean removeImage) {
        String imagePath = image != null ? image.getOriginalFilename() : null;
        Post postDetails = Post.builder()
                .title(title)
                .content(content)
                .imagePath(imagePath)
                .build();

        Post updatedPost = postService.updatePost(id, postDetails, removeImage);

        if (image != null) {
            // 이미지 저장 로직 추가 가능
        }

        return ResponseEntity.ok(updatedPost);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePost(@PathVariable Integer id) {
        postService.deletePost(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}/view")
    public ResponseEntity<?> incrementViews(@PathVariable Integer id) {
        postService.incrementViews(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<?> getAllPosts(@RequestParam(value = "page", defaultValue = "1") Integer page) {
        int limit = 10;
        Page<Post> postPage = postService.getAllPosts(page, limit);
        Map<String, Object> response = new HashMap<>();
        response.put("posts", postPage.getContent());
        response.put("totalPages", postPage.getTotalPages());
        response.put("currentPage", page);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPostById(@PathVariable Integer id) {
        Post post = postService.getPostById(id);
        return ResponseEntity.ok(post);
    }
}
