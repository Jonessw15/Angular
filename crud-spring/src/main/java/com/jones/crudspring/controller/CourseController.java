package com.jones.crudspring.controller;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jones.crudspring.model.Course;
import com.jones.crudspring.repository.CourseRepository;

import lombok.AllArgsConstructor;


@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
@Component
public class CourseController {

    private final CourseRepository courseRepository;

@GetMapping
public List<Course> list() {
    return courseRepository.findAll();
}
    
}
