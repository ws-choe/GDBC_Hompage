package com.example.backproject.repository.project;

import com.example.backproject.entity.project.Presentation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PresentaionRepository extends JpaRepository<Presentation, Integer> {
    Page<Presentation> findAll(Pageable pageable);
    Page<Presentation> findAll(Specification<Presentation> spec, Pageable pageable);
}
