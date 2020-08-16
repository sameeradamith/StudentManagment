package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="students")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "fullname")
	private String fullName;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "parenname")
	private String parentName;
	
	@Column(name = "dob")
	private String dob;
	
	@Column(name = "enrollmentdate")
	private String enrollmentDate;
	
	public Student() {
		
	}
	
	public Student(String fullName, String address, String parentName, String dob, String enrollmentDate) {
		super();
		this.fullName = fullName;
		this.address = address;
		this.parentName = parentName;
		this.dob = dob;
		this.enrollmentDate = enrollmentDate;
	}
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getParentName() {
		return parentName;
	}
	public void setParentName(String parentName) {
		this.parentName = parentName;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getEnrollmentDate() {
		return enrollmentDate;
	}
	public void setEnrollmentDate(String enrollmentDate) {
		this.enrollmentDate = enrollmentDate;
	}
	
	
}
