package com.example.service;

import com.example.model.Student;
import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
public class CsvFileServiceImpl implements CsvFileService {


    @Override
    public List<Student> getBatchStudents(String batchId) throws IOException {
        File file = ResourceUtils.getFile("classpath:"+batchId+".csv");
        MappingIterator<Student> iterator =
                new CsvMapper()
                .readerWithTypedSchemaFor(Student.class)
                .readValues(file);
        return iterator.readAll();
    }
}
