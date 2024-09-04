package com.example.backproject.service.announcement;

import com.example.backproject.entity.announcement.QnaPostComment;
import com.example.backproject.repository.announcement.QnaPostCommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QnaPostCommentService {
    @Autowired
    private QnaPostCommentRepository qnaCommentRepository;

    public QnaPostComment createComment(QnaPostComment comment) {
        return qnaCommentRepository.save(comment);
    }

    public void deleteComment(Integer id) {
        qnaCommentRepository.deleteById(id);
    }

    public List<QnaPostComment> getCommentsByPostId(Integer postId) {
        return qnaCommentRepository.findByPostId(postId);
    }
}
