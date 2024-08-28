package com.example.backproject.repository.announcement;

import com.example.backproject.entity.announcement.EmploymentPost;
import com.example.backproject.entity.announcement.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmploymentPostRepository extends JpaRepository<EmploymentPost, Integer> {
    Page<EmploymentPost> findAll(Pageable pageable);
    Page<EmploymentPost> findAll(Specification<EmploymentPost> spec, Pageable pageable);
}
