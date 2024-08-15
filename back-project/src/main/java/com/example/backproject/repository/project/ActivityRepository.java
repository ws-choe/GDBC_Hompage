package com.example.backproject.repository.project;

import com.example.backproject.entity.project.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<Activity, Integer> {
}
