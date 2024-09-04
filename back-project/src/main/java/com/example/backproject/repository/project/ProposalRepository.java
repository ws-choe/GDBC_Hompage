package com.example.backproject.repository.project;

import com.example.backproject.entity.project.Proposal;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProposalRepository extends JpaRepository<Proposal, Integer> {
    Page<Proposal> findAll(Pageable pageable);
    Page<Proposal> findAll(Specification<Proposal> spec, Pageable pageable);
}
