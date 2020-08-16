package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="grades")
public class Grade {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "teachername")
	private String teacherName;
	
	@Column(name = "contactnumber")
	private String contactNumber;
	
	@Column(name = "gradestudent")
	private String gradeStudent;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn( name = "grade_fid", referencedColumnName = "id")
	List<Student> students = new ArrayList<>();
	
	public Grade() {
		
	}
	
	public Grade(String teacherName, String contactNumber, String gradeStudent) {
		super();
		this.teacherName = teacherName;
		this.contactNumber = contactNumber;
		this.gradeStudent = gradeStudent;
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getGradeStudent() {
		return gradeStudent;
	}

	public void setGradeStudent(String gradeStudent) {
		this.gradeStudent = gradeStudent;
	}
	
	
}
