package com.example.backproject.service.announcement;

import com.example.backproject.entity.announcement.QnaPost;
import com.example.backproject.repository.announcement.QnaPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QnaPostService {
    @Autowired
    private QnaPostRepository qnaPostRepository;

    public QnaPost createPost(QnaPost post) {
        return qnaPostRepository.save(post);
    }

    public QnaPost updatePost(Integer id, QnaPost postDetails, Boolean removeImage) {
        Optional<QnaPost> existingPostOpt = qnaPostRepository.findById(id);
        if (existingPostOpt.isPresent()) {
            QnaPost existingPost = existingPostOpt.get();
            existingPost.setTitle(postDetails.getTitle());
            existingPost.setContent(postDetails.getContent());
            if (removeImage != null && removeImage) {
                existingPost.setImagePath(null);
            } else {
                existingPost.setImagePath(postDetails.getImagePath());
            }
            return qnaPostRepository.save(existingPost);
        } else {
            throw new RuntimeException("Post not found");
        }
    }

    public void deletePost(Integer id) {
        qnaPostRepository.deleteById(id);
    }

    public void incrementViews(Integer id) {
        Optional<QnaPost> postOpt = qnaPostRepository.findById(id);
        if (postOpt.isPresent()) {
            QnaPost post = postOpt.get();
            post.setViews(post.getViews() + 1);
            qnaPostRepository.save(post);
        } else {
            throw new RuntimeException("Post not found");
        }
    }

    public QnaPost getPostById(Integer id) {
        return qnaPostRepository.findById(id).orElseThrow(() -> new RuntimeException("Post not found"));
    }

    public Page<QnaPost> getAllPosts(int page, int limit) {
        Pageable pageable = PageRequest.of(page - 1, limit);
        return qnaPostRepository.findAll(pageable);
    }

}
