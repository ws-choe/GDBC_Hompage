package com.example.backproject.repository;

import com.example.backproject.entity.Post;
import com.example.backproject.entity.User;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Integer> {
}
