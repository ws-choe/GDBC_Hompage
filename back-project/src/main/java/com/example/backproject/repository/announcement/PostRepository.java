package com.example.backproject.repository.announcement;

import com.example.backproject.entity.announcement.Post;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Integer> {
}
