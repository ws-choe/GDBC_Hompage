package com.example.backproject.repository.announcement;

import com.example.backproject.entity.announcement.Post;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Integer> {
    Page<Post> findAll(Pageable pageable);
    Page<Post> findAll(Specification<Post> spec, Pageable pageable);
    Page<Post> findByUserId(Pageable pageable, int id);
    Page<Post> findByTitle(Pageable pageable,String search);
}
