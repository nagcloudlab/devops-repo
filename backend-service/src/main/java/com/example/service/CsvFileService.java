package com.example.service;

import com.example.model.Student;

import java.io.IOException;
import java.util.List;

public interface CsvFileService {
    List<Student> getBatchStudents(String batchId) throws IOException;
}
