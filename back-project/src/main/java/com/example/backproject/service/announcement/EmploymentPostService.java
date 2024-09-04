package com.example.backproject.service.announcement;

import com.example.backproject.entity.User;
import com.example.backproject.entity.announcement.EmploymentPost;
import com.example.backproject.entity.announcement.Post;
import com.example.backproject.entity.announcement.QnaPost;
import com.example.backproject.repository.announcement.EmploymentPostRepository;
import jakarta.persistence.criteria.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmploymentPostService {

    @Autowired
    private EmploymentPostRepository employmentPostRepository; // Naming convention

    public EmploymentPost createPost(EmploymentPost post) {
        return employmentPostRepository.save(post);
    }

    public EmploymentPost updatePost(Integer id, EmploymentPost postDetails, boolean origin1, boolean origin2,boolean origin3, boolean origin4 ) {
        Optional<EmploymentPost> existingPostOpt = employmentPostRepository.findById(id);
        if (existingPostOpt.isPresent()) {
            EmploymentPost existingPost = existingPostOpt.get();
            existingPost.setTitle(postDetails.getTitle());
            existingPost.setContent(postDetails.getContent());
            if(!origin1) {
                existingPost.setImagePath(postDetails.getImagePath());
            }
            if(!origin2) {
                existingPost.setImagePath2(postDetails.getImagePath2());
            }
            if(!origin3) {
                existingPost.setImagePath3(postDetails.getImagePath3());
            }
            if(!origin4) {
                existingPost.setImagePath4(postDetails.getImagePath4());
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


    public Page<EmploymentPost> getAllPosts(int page, int limit, String kw, String category) {
        List<Sort.Order> sorts = new ArrayList<>();
        sorts.add(Sort.Order.desc("id"));
        Pageable pageable = PageRequest.of(page - 1, limit,Sort.by(sorts));

        Specification<EmploymentPost> spec;
        if(category.equals("title")){
            spec = searchTitle(kw);
        }
        else{
            spec = searchUserId(kw);
        }
        return employmentPostRepository.findAll(spec,pageable);
    }

    private Specification<EmploymentPost> searchTitle(String kw) {
        return new Specification<EmploymentPost>() {
            private static final long serialVersionUID = 1L;
            @Override
            public Predicate toPredicate(Root<EmploymentPost> q, CriteriaQuery<?> query, CriteriaBuilder cb) {
                return cb.like(q.get("title"), "%" + kw + "%");
            }
        };
    }
    private Specification<EmploymentPost> searchUserId(String kw) {
        return new Specification<EmploymentPost>() {
            private static final long serialVersionUID = 1L;
            @Override
            public Predicate toPredicate(Root<EmploymentPost> q, CriteriaQuery<?> query, CriteriaBuilder cb) {
                Join<EmploymentPost, User> u1 = q.join("user", JoinType.LEFT);
                return cb.like(u1.get("username"), "%" + kw + "%");    // 질문 작성자
            }
        };
    }
}
