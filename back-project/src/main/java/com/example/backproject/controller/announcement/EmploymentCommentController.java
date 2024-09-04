package com.example.backproject.controller.announcement;

import com.example.backproject.entity.announcement.EmploymentPostComment;
import com.example.backproject.service.announcement.EmploymentPostCommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employmentboard/{postId}/comments")
public class EmploymentCommentController {
    @Autowired
    private EmploymentPostCommentService employmentPostCommentService;

    @PostMapping
    public ResponseEntity<?> createComment(@PathVariable("postId") Integer postId,
                                           @RequestBody EmploymentPostComment comment) {
        comment.setPostId(postId);
        System.out.println(comment.getPostId());
        EmploymentPostComment createdComment = employmentPostCommentService.createComment(comment);
        System.out.println("======================");
        return new ResponseEntity<>(createdComment, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getCommentsByPostId(@PathVariable("postId") Integer postId) {
        List<EmploymentPostComment> comments = employmentPostCommentService.getCommentsByPostId(postId);
        return ResponseEntity.ok(comments);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteComment(@PathVariable("id") Integer id) {
        employmentPostCommentService.deleteComment(id);
        return ResponseEntity.noContent().build();
    }
}
