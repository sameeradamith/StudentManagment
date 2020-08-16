import axios from 'axios';

const STUDENT_API_URL = "http://localhost:8080/api/students";

class StudentService {
    getStudents() {
        return axios.get(STUDENT_API_URL);
    }

    createStudent(student){
        return axios.post(STUDENT_API_URL, student);
    }

    getStudentById(studentId) {
        return axios.get(STUDENT_API_URL + '/' + studentId);
    }

    updateStudent(student, studentId) {
        return axios.put(STUDENT_API_URL + '/' + studentId, student);
    }

    deleteStudent(studentId) {
        return axios.delete(STUDENT_API_URL + '/' + studentId);
    }
}

export default new StudentService();