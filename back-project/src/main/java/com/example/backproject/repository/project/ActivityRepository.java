package com.example.backproject.repository.project;

import com.example.backproject.entity.announcement.Post;
import com.example.backproject.entity.project.Activity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<Activity, Integer> {
    Page<Activity> findAll(Pageable pageable);
    Page<Activity> findAll(Specification<Activity> spec, Pageable pageable);
}
