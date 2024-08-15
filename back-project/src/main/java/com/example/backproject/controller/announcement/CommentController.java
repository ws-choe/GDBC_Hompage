package com.example.backproject.controller.announcement;

import com.example.backproject.entity.announcement.Comment;
import com.example.backproject.service.announcement.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts/{postId}/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping
    public ResponseEntity<?> createComment(@PathVariable("postId") Integer postId,
                                           @RequestBody Comment comment) {
        comment.setPostId(postId);
        System.out.println(comment.getPostId());
        Comment createdComment = commentService.createComment(comment);
        System.out.println("======================");
        return new ResponseEntity<>(createdComment, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getCommentsByPostId(@PathVariable("postId") Integer postId) {
        List<Comment> comments = commentService.getCommentsByPostId(postId);
        return ResponseEntity.ok(comments);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteComment(@PathVariable("id") Integer id) {
        commentService.deleteComment(id);
        return ResponseEntity.noContent().build();
    }
}
