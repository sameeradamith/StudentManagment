import React, { Component } from 'react';
import GradeService from '../services/GradeService';

class CreateGradeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            teacherName: '',
            contactNumber: '',
            gradeStudent: ''
        }

        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeContactNumberHandler = this.changeContactNumberHandler.bind(this);
        this.saveGrades = this.saveGrades.bind(this);
    }


    saveGrades = (e) => {
        e.preventDefault();
        let grade = {teacherName: this.state.teacherName, contactNumber: this.state.contactNumber, gradeStudent: this.state.gradeStudent};
        console.log('Grade => ' + JSON.stringify(grade));

        GradeService.createGrade(grade).then(res =>{
            this.props.history.push('/grades');
        });
    }


    changeFullNameHandler= (event) => {
        this.setState({teacherName: event.target.value});
    }
    changeContactNumberHandler= (event) => {
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
                        <h3 className="text-center mt-2">Add New Class</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input placeholder="Teacher Full Name" name="teacherName" className="form-control"
                                    value={this.state.teacherName} onChange={this.changeFullNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <input placeholder="Contact Number" name="contactNumber" className="form-control"
                                    value={this.state.contactNumber} onChange={this.changeContactNumberHandler}/>
                                </div>
                                <div className="form-group">
                                    <input placeholder="Number of students" name="gradeStudent" className="form-control"
                                    value={this.state.gradeStudent} onChange={this.changeGradeStudentNameHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.saveGrades}>Save Class</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CreateGradeComponent;