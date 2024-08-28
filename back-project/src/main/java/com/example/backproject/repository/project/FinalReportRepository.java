package com.example.backproject.repository.project;

import com.example.backproject.entity.project.Activity;
import com.example.backproject.entity.project.FinalReport;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FinalReportRepository extends JpaRepository<FinalReport, Integer> {
    Page<FinalReport> findAll(Pageable pageable);
    Page<FinalReport> findAll(Specification<FinalReport> spec, Pageable pageable);

}
