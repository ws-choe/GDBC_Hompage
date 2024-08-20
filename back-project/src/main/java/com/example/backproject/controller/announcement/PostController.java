package com.example.backproject.controller.announcement;

import com.example.backproject.entity.announcement.Post;
import com.example.backproject.service.announcement.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;


//0809 이미지 업로드 기능 추가. 김가영
@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @Value("${upload.path}")
    private String uploadPath;

    @PostMapping
    public ResponseEntity<?> createPost(@RequestParam("title") String title,
                                        @RequestParam("content") String content,
                                        @RequestParam("userId") Integer userId,
                                        @RequestParam(value = "image1", required = false) MultipartFile image1,
                                        @RequestParam(value = "image2", required = false) MultipartFile image2
    ) {
        String imagePath1 = null;

        if (image1 != null) {
            imagePath1 = saveImage(image1);
        }
        String imagePath2 = null;

        if (image2 != null) {
            imagePath2 = saveImage(image2);
        }

        Post post = Post.builder()
                .title(title)
                .content(content)
                .userId(userId)
                .views(0)
                .imagePath1(imagePath1)
                .imagePath2(imagePath2)
                .build();
        Post createdPost = postService.createPost(post);

        return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePost(@PathVariable("id") Integer id,
                                        @RequestParam("title") String title,
                                        @RequestParam("content") String content,
                                        @RequestParam(value = "image1", required = false) MultipartFile image1,
                                        @RequestParam(value = "image2", required = false) MultipartFile image2,
                                        @RequestParam(value = "origin1", required = false) boolean origin1,
                                        @RequestParam(value = "origin2", required = false) boolean origin2) {

        Post post = postService.getPostById(id);

        String imagePath1 = null;
        String imagePath2 = null;

        System.out.println("===========================");

        System.out.println(post.getImagePath1());

        Post postDetails;

        if(!origin1){
            if(image1!=null) {
                imagePath1 = saveImage(image1);
            }
        }

        if(!origin2){
            if(image2!=null) {
                imagePath2 = saveImage(image2);
            }
        }
        postDetails = Post.builder()
                .title(title)
                .content(content)
                .imagePath1(imagePath1)
                .imagePath2(imagePath2)
                .build();

        Post updatedPost = postService.updatePost(id, postDetails,origin1,origin2);

        return ResponseEntity.ok(updatedPost);
    }

    //김가영님 추가 코드
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

        return originalFilename; // 원본 파일명을 반환
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
        Page<Post> postPage = postService.getAllPosts(page, limit);
        Map<String, Object> response = new HashMap<>();
        response.put("posts", postPage.getContent());
        response.put("totalPages", postPage.getTotalPages());
        response.put("currentPage", page);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPostById(@PathVariable("id") Integer id) {
        Post post = postService.getPostById(id);
        return ResponseEntity.ok(post);
    }

    //다운로드 기능
    @GetMapping("/download/{filename:.+}")
    public ResponseEntity<Resource> downloadImage(@PathVariable String filename) {
        try {
            Path filePath = Paths.get(uploadPath).resolve(filename).normalize();
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists() || resource.isReadable()) {
                String contentType = Files.probeContentType(filePath); // 파일의 MIME 타입을 자동으로 감지

                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                        .contentType(MediaType.parseMediaType(contentType)) // MIME 타입 설정
                        .body(resource);
            } else {
                throw new RuntimeException("Could not read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error occurred while downloading the file", e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
