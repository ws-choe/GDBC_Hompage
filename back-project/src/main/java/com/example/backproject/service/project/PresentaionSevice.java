package com.example.backproject.service.project;


import com.example.backproject.entity.project.Presentation;
import com.example.backproject.repository.project.PresentaionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PresentaionSevice {

    @Autowired
    private PresentaionRepository postRepository;

    public Presentation createPost(Presentation post) {
        return postRepository.save(post);
    }

    public Presentation updatePost(Integer id, Presentation postDetails, Boolean removeImage) {
        Optional<Presentation> existingPostOpt = postRepository.findById(id);
        if (existingPostOpt.isPresent()) {
            Presentation existingPost = existingPostOpt.get();
            existingPost.setTitle(postDetails.getTitle());
            existingPost.setContent(postDetails.getContent());
            if (removeImage != null && removeImage) {
                existingPost.setImagePath(null);
            } else {
                existingPost.setImagePath(postDetails.getImagePath());
            }
            return postRepository.save(existingPost);
        } else {
            throw new RuntimeException("Post not found");
        }
    }

    public void deletePost(Integer id) {
        postRepository.deleteById(id);
    }

    public void incrementViews(Integer id) {
        Optional<Presentation> postOpt = postRepository.findById(id);
        if (postOpt.isPresent()) {
            Presentation post = postOpt.get();
            post.setViews(post.getViews() + 1);
            postRepository.save(post);
        } else {
            throw new RuntimeException("Post not found");
        }
    }

    public Presentation getPostById(Integer id) {
        return postRepository.findById(id).orElseThrow(() -> new RuntimeException("Post not found"));
    }

    public Page<Presentation> getAllPosts(int page, int limit) {
        Pageable pageable = PageRequest.of(page - 1, limit);
        return postRepository.findAll(pageable);
    }
}
