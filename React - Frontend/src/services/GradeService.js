import axios from 'axios';

const GRADE_API_URL = "http://localhost:8080/api/grades";

class GradeService {
    getGrades() {
        return axios.get(GRADE_API_URL);
    }

    createGrade(grade){
        return axios.post(GRADE_API_URL, grade);
    }

    getGradeById(gradeId) {
        return axios.get(GRADE_API_URL + '/' + gradeId);
    }

    updateGrade(grade, gradeId) {
        return axios.put(GRADE_API_URL + '/' + gradeId, grade);
    }

    deleteGrade(gradeId) {
        return axios.delete(GRADE_API_URL + '/' + gradeId);
    }


}

export default new GradeService();