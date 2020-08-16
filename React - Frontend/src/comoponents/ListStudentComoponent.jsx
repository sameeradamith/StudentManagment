import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ListStudentComoponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            students : []
        }

        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    componentDidMount() {
        StudentService.getStudents().then((res) => {
            this.setState({students : res.data});
        })
    }

    addStudent() {
        this.props.history.push('/add-student');
    }

    editStudent(id) {
        this.props.history.push(`/update-student/${id}`);
    }

    deleteStudent(id) {
        StudentService.deleteStudent(id).then( (res) => {
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center mt-3"> Welcome to Students Manegment System</h2>
                <h3 className="text-center pt-2">Students Details</h3>
                <div className="row mb-2">
                    <button className="btn btn-primary" onClick={this.addStudent}>Add Student</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Student Address</th>
                                <th>Student Parent Name</th>
                                <th>Student DOB</th>
                                <th>Student Enrollment Date</th>
                                <th>#</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.students.map(
                                    student => 
                                    <tr key={student.id}>
                                        <td>{student.fullName}</td>
                                        <td>{student.address}</td>
                                        <td>{student.parentName}</td>
                                        <td>{student.dob}</td>
                                        <td>{student.enrollmentDate}</td>
                                        <td style={{whiteSpace: "nowrap"}}>
                                            <button onClick={ () => this.editStudent(student.id) } className="btn btn-success">Update</button>
                                            <button onClick={ () => this.deleteStudent(student.id) } className="btn btn-danger ml-2">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListStudentComoponent;