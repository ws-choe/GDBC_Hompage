package com.example.backproject.repository.announcement;

import com.example.backproject.entity.announcement.Post;
import com.example.backproject.entity.announcement.QnaPost;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QnaPostRepository extends JpaRepository<QnaPost, Integer> {
    Page<QnaPost> findAll(Pageable pageable);
    Page<QnaPost> findAll(Specification<QnaPost> spec, Pageable pageable);
}
