package com.example.backproject.service.announcement;

import com.example.backproject.entity.announcement.Post;
import com.example.backproject.repository.announcement.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public Post updatePost(Integer id, Post postDetails, boolean origin) {
        Optional<Post> existingPostOpt = postRepository.findById(id);
        if (existingPostOpt.isPresent()) {
            Post existingPost = existingPostOpt.get();
            existingPost.setTitle(postDetails.getTitle());
            existingPost.setContent(postDetails.getContent());

            if(!origin){
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
        Optional<Post> postOpt = postRepository.findById(id);
        if (postOpt.isPresent()) {
            Post post = postOpt.get();
            post.setViews(post.getViews() + 1);
            postRepository.save(post);
        } else {
            throw new RuntimeException("Post not found");
        }
    }

    public Post getPostById(Integer id) {
        return postRepository.findById(id).orElseThrow(() -> new RuntimeException("Post not found"));
    }

    public Page<Post> getAllPosts(int page, int limit) {
        Pageable pageable = PageRequest.of(page - 1, limit);
        return postRepository.findAll(pageable);
    }
}
