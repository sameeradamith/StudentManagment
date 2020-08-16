package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;

@CrossOrigin(origins = "https://fornt-end.herokuapp.com")
@RestController
@RequestMapping("/api/")
public class StudentController {
	
	@Autowired
	private StudentRepository studentRepository;
	
	//Get Student details
	@GetMapping("/students")
	public java.util.List<Student> getAllStudents() {
		return studentRepository.findAll();
	}
	
	//Add Student to database
	@PostMapping("/students")
	public Student createStudent(@RequestBody Student student) {
		return studentRepository.save(student);
	}
	
	// get students by id rest API
	@GetMapping("/students/{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
		Student student = studentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Student not exist!"));
		return ResponseEntity.ok(student);
	}
	
	
	//Update student details
	@PutMapping("/students/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studenDetails) {
		Student student= studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not exsist"));
		
		student.setFullName(studenDetails.getFullName());
		student.setAddress(studenDetails.getAddress());
		student.setDob(studenDetails.getDob());
		student.setParentName(studenDetails.getParentName());
		student.setEnrollmentDate(studenDetails.getEnrollmentDate());
		
		Student updateStudent = studentRepository.save(student);
		return ResponseEntity.ok(updateStudent);
		
	}
	
	// delete student rest API
	@DeleteMapping("/students/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Long id){
		Student student = studentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Student not exist!"));
		
		studentRepository.delete(student);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
