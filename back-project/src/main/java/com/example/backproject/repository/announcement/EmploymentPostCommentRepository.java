package com.example.backproject.repository.announcement;

import com.example.backproject.entity.announcement.EmploymentPostComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmploymentPostCommentRepository extends JpaRepository<EmploymentPostComment, Integer> {
    List<EmploymentPostComment> findByPostId(Integer postId);
}
