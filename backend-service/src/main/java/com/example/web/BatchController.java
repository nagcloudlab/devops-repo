package com.example.web;


import com.example.model.Student;
import com.example.service.CsvFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BatchController {

    private final CsvFileService csvFileService;

    public BatchController(CsvFileService csvFileService) {
        this.csvFileService = csvFileService;
    }

    @GetMapping("/api/batch/{batchId}/students")
    public List<Student> students(@PathVariable String batchId) throws IOException {
        return  this.csvFileService.getBatchStudents(batchId);
    }

}
