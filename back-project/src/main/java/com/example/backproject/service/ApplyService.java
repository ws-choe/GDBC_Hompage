package com.example.backproject.service;

import com.example.backproject.entity.Apply;
import com.example.backproject.repository.ApplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplyService {
    @Autowired
    private ApplyRepository applyRepository;

    public Apply saveApply(Apply application) {
        return applyRepository.save(application);
    }
}
