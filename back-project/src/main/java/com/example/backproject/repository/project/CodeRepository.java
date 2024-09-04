package com.example.backproject.repository.project;

import com.example.backproject.entity.project.Activity;
import com.example.backproject.entity.project.Code;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CodeRepository extends JpaRepository<Code, Integer> {
    Page<Code> findAll(Pageable pageable);
    Page<Code> findAll(Specification<Code> spec, Pageable pageable);

}
