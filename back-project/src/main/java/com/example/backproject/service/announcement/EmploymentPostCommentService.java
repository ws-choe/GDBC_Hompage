package com.example.backproject.service.announcement;

import com.example.backproject.entity.announcement.EmploymentPostComment;
import com.example.backproject.repository.announcement.EmploymentPostCommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmploymentPostCommentService {
    @Autowired
    private EmploymentPostCommentRepository employmentCommentRepository;

    public EmploymentPostComment createComment(EmploymentPostComment comment) {
        return employmentCommentRepository.save(comment);
    }

    public void deleteComment(Integer id) {
        employmentCommentRepository.deleteById(id);
    }

    public List<EmploymentPostComment> getCommentsByPostId(Integer postId) {
        return employmentCommentRepository.findByPostId(postId);
    }
}
