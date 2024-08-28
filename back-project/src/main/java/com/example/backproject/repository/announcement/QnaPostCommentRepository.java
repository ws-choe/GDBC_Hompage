package com.example.backproject.repository.announcement;

import com.example.backproject.entity.announcement.QnaPostComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QnaPostCommentRepository extends JpaRepository<QnaPostComment, Integer> {
    List<QnaPostComment> findByPostId(Integer postId);

}
