package com.example.backproject.controller.announcement;

import com.example.backproject.entity.announcement.QnaPostComment;
import com.example.backproject.service.announcement.QnaPostCommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/qnaboard/{postId}/comments")
public class QnaCommentController {
    @Autowired
    private QnaPostCommentService qnaCommentService;

    @PostMapping
    public ResponseEntity<?> createComment(@PathVariable("postId") Integer postId,
                                           @RequestBody QnaPostComment comment) {
        comment.setPostId(postId);
        System.out.println(comment.getPostId());
        QnaPostComment createdComment = qnaCommentService.createComment(comment);
        System.out.println("======================");
        return new ResponseEntity<>(createdComment, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getCommentsByPostId(@PathVariable("postId") Integer postId) {
        List<QnaPostComment> comments = qnaCommentService.getCommentsByPostId(postId);
        return ResponseEntity.ok(comments);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteComment(@PathVariable("id") Integer id) {
        qnaCommentService.deleteComment(id);
        return ResponseEntity.noContent().build();
    }
}
