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
                                        @RequestParam(value = "image", required = false) MultipartFile image,
                                        @RequestParam(value = "image2", required = false) MultipartFile image2,
                                        @RequestParam(value = "image3", required = false) MultipartFile image3,
                                        @RequestParam(value = "image4", required = false) MultipartFile image4) {
        String imagePath = null;
        if (image != null) {
            imagePath = saveImage(image);
        }

        String imagePath2 = null;
        if (image2 != null) {
            imagePath2 = saveImage(image2);
        }

        String imagePath3 = null;
        if (image3 != null) {
            imagePath3 = saveImage(image3);
        }

        String imagePath4 = null;
        if (image4 != null) {
            imagePath4 = saveImage(image4);
        }
        Post post = Post.builder()
                .title(title)
                .content(content)
                .userId(userId)
                .views(0)
                .imagePath(imagePath)
                .imagePath2(imagePath2)
                .imagePath3(imagePath3)
                .imagePath4(imagePath4)
                .build();
        Post createdPost = postService.createPost(post);

        return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePost(@PathVariable("id") Integer id,
                                        @RequestParam("title") String title,
                                        @RequestParam("content") String content,
                                        @RequestParam(value = "image", required = false) MultipartFile image,
                                        @RequestParam(value = "image2", required = false) MultipartFile image2,
                                        @RequestParam(value = "image3", required = false) MultipartFile image3,
                                        @RequestParam(value = "image4", required = false) MultipartFile image4,
                                        @RequestParam(value = "origin", required = false) boolean origin,
                                        @RequestParam(value = "origin2", required = false) boolean origin2,
                                        @RequestParam(value = "origin3", required = false) boolean origin3,
                                        @RequestParam(value = "origin4", required = false) boolean origin4) {


        String imagePath = null;
        String imagePath2 = null;
        String imagePath3 = null;
        String imagePath4 = null;


        if(!origin){
            if(image!=null) {
                imagePath = saveImage(image);
            }
        }

        if(!origin2){
            if(image2!=null) {
                imagePath2 = saveImage(image2);
            }
        }

        if(!origin3){
            if(image3!=null) {
                imagePath3 = saveImage(image3);
            }
        }

        if(!origin4){
            if(image4!=null) {
                imagePath4 = saveImage(image4);
            }
        }

        Post postDetails;
        postDetails = Post.builder()
                .title(title)
                .content(content)
                .imagePath(imagePath)
                .imagePath2(imagePath2)
                .imagePath3(imagePath3)
                .imagePath4(imagePath4)
                .build();

        Post updatedPost = postService.updatePost(id, postDetails,origin,origin2,origin3, origin4);

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
    public ResponseEntity<?> getAllPosts(@RequestParam(value = "page", defaultValue = "1") Integer page,
                                         @RequestParam(value = "kw", defaultValue = "") String kw,
                                         @RequestParam(value = "category", defaultValue = "") String category) {
        int limit = 10;

        Page<Post> postPage = postService.getAllPosts(page, limit,kw, category);
        Map<String, Object> response = new HashMap<>();
        response.put("posts", postPage.getContent());
        response.put("totalPages", postPage.getTotalPages());
        response.put("currentPage", page);
        response.put("kw",kw);


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
