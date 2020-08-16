import React, { Component } from 'react';
import GradeService from '../services/GradeService';

class UpdateGradeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            teacherName: '',
            contactNumber: '',
            gradeStudent: ''
        }

        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        // this.saveGrades = this.saveGrades.bind(this);
    }


    componentDidMount() {
        GradeService.getGradeById(this.state.id).then((res) => {
            let grade = res.data;
            this.setState({
                teacherName: grade.teacherName,
                contactNumber: grade.contactNumber,
                gradeStudent: grade.gradeStudent})
        })
    }

    updateGrade = (e) => {
        e.preventDefault();
        let grade = {teacherName: this.state.teacherName, contactNumber: this.state.contactNumber, gradeStudent: this.state.gradeStudent};
        console.log('grade => ' + JSON.stringify(grade));

        GradeService.updateGrade(grade, this.state.id).then( res => {
            this.props.history.push('/grades');
        });

    }


    changeFullNameHandler= (event) => {
        this.setState({teacherName: event.target.value});
    }
    changeContactHandler= (event) => {
        this.setState({contactNumber: event.target.value});
    }    
    changeGradeStudentNameHandler= (event) => {
        this.setState({gradeStudent: event.target.value});
    }



    render() {
        return (
            <div>
                <div className="container">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-4">
                        <h3 className="text-center mt-2">Update Class Details</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input placeholder="Teacher Name" name="teacherName" className="form-control"
                                    value={this.state.teacherName} onChange={this.changeFullNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <input placeholder="Contact Number" name="contactNumber" className="form-control"
                                    value={this.state.contactNumber} onChange={this.changeContactHandler}/>
                                </div>
                                <div className="form-group">
                                    <input placeholder="Number of students" name="gradeStudent" className="form-control"
                                    value={this.state.gradeStudent} onChange={this.changeGradeStudentNameHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.updateGrade}>Save Details</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default UpdateGradeComponent;