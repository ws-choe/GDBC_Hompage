package com.example.backproject.service.announcement;

import com.example.backproject.entity.announcement.EmploymentPost;
import com.example.backproject.repository.announcement.EmploymentPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmploymentPostService {

    @Autowired
    private EmploymentPostRepository employmentPostRepository; // Naming convention

    public EmploymentPost createPost(EmploymentPost post) {
        return employmentPostRepository.save(post);
    }


    public EmploymentPost updatePost(Integer id, EmploymentPost postDetails, boolean origin) {
        Optional<EmploymentPost> existingPostOpt = employmentPostRepository.findById(id);
        if (existingPostOpt.isPresent()) {
            EmploymentPost existingPost = existingPostOpt.get();
            existingPost.setTitle(postDetails.getTitle());
            existingPost.setContent(postDetails.getContent());

            if(!origin){
                existingPost.setImagePath(postDetails.getImagePath());
            }
            return employmentPostRepository.save(existingPost);
        } else {
            throw new RuntimeException("Post not found");
        }
    }

    public void deletePost(Integer id) {
        if (!employmentPostRepository.existsById(id)) {
            throw new RuntimeException("Post not found");
        }
        employmentPostRepository.deleteById(id);
    }

    public void incrementViews(Integer id) {
        EmploymentPost post = employmentPostRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Post not found")); // Use orElseThrow directly

        post.setViews(post.getViews() + 1);
        employmentPostRepository.save(post);
    }

    public EmploymentPost getPostById(Integer id) {
        return employmentPostRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Post not found"));
    }

    public Page<EmploymentPost> getAllPosts(int page, int limit) {
        Pageable pageable = PageRequest.of(page - 1, limit);
        return employmentPostRepository.findAll(pageable);
    }
}
