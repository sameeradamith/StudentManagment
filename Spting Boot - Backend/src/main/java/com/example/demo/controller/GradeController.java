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
import com.example.demo.model.Grade;
import com.example.demo.repository.GradeRepository;

@CrossOrigin(origins = "https://fornt-end.herokuapp.com")
@RestController
@RequestMapping("/api/")
public class GradeController {
	@Autowired
	private GradeRepository gradeRepository;
	
	//Get Grade details
	@GetMapping("/grades")
	public java.util.List<Grade> getAllGrades() {
		return gradeRepository.findAll();
	}
	
	//Add Class data to database
	@PostMapping("/grades")
	public Grade createGrade(@RequestBody Grade grade) {
		return gradeRepository.save(grade);
	}
	
	
	
	// get class by id rest API
	@GetMapping("/grades/{id}")
	public ResponseEntity<Grade> getGradeById(@PathVariable Long id) {
		Grade grade = gradeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Class not exist!"));
		return ResponseEntity.ok(grade);
	}
	
	
	
	
	//Update Class details
	@PutMapping("/grades/{id}")
	public ResponseEntity<Grade> updateGrade(@PathVariable Long id, @RequestBody Grade gradeDetails) {
		Grade grade= gradeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Grade not exsist"));
		
		grade.setTeacherName(gradeDetails.getTeacherName());
		grade.setContactNumber(gradeDetails.getContactNumber());
		grade.setGradeStudent(gradeDetails.getGradeStudent());
		
		Grade updateGrade = gradeRepository.save(grade);
		return ResponseEntity.ok(updateGrade);
		
	}
	
	// delete class rest API
	@DeleteMapping("/grades/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteGrade(@PathVariable Long id){
		Grade grade = gradeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Grade not exist!"));
		
		gradeRepository.delete(grade);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
