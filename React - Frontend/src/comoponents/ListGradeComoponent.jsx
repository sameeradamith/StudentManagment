import React, { Component } from 'react';
import GradeService from '../services/GradeService';

class ListStudentComoponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            grades : []
        }

        this.addGrade = this.addGrade.bind(this);
        this.editGrade = this.editGrade.bind(this);
    }

    componentDidMount() {
        GradeService.getGrades().then((res) => {
            this.setState({grades : res.data});
        })
    }

    addGrade() {
        this.props.history.push('/add-grade');
    }

    editGrade(id) {
        this.props.history.push(`/update-grade/${id}`);
    }

    deleteClass(id) {
        GradeService.deleteGrade(id).then( (res) => {
            this.setState({grades: this.state.grades.filter(grade => grade.id !== id)});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center mt-4">Class Details</h2>
                <div className="row">
                    <button className="btn btn-primary mb-2" onClick={this.addGrade}>Add New Class</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Class Id</th>
                                <th>Teacher Name</th>
                                <th>Teacher Contact Number</th>
                                <th>Number Of Students</th>
                                <th>#</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.grades.map(
                                    grade => 
                                    <tr key={grade.id}>
                                        <td>{grade.id}</td>
                                        <td>{grade.teacherName}</td>
                                        <td>{grade.contactNumber}</td>
                                        <td>{grade.gradeStudent}</td>
                                        <td>
                                            <button onClick={ () => this.editGrade(grade.id) } className="btn btn-info">Update</button>
                                            <button onClick={ () => this.deleteClass(grade.id) } className="btn btn-danger ml-2">Delete</button>
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