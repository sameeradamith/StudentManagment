import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class CreateStudentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            address: '',
            parentName: '',
            dob: '',
            enrollmentDate: ''
        }

        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.saveOrUpdateStudents = this.saveOrUpdateStudents.bind(this);
    }


    saveOrUpdateStudents = (e) => {
        e.preventDefault();
        let student = {fullName: this.state.fullName, address: this.state.address, parentName: this.state.parentName, dob: this.state.dob, enrollmentDate: this.state.enrollmentDate};
        console.log('student => ' + JSON.stringify(student));

        StudentService.createStudent(student).then(res =>{
            this.props.history.push('/students');
        });
    }


    changeFullNameHandler= (event) => {
        this.setState({fullName: event.target.value});
    }
    changeaddressHandler= (event) => {
        this.setState({address: event.target.value});
    }    
    changeparentNameHandler= (event) => {
        this.setState({parentName: event.target.value});
    }
    changedobHandler= (event) => {
        this.setState({dob: event.target.value});
    }
    changeenrollmentDateHandler= (event) => {
        this.setState({enrollmentDate: event.target.value});
    }



    render() {
        return (
            <div>
                <div className="container">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-4">
                        <h3 className="text-center mt-2">Add New Student</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input placeholder="Student Full Name" name="fullname" className="form-control"
                                    value={this.state.fullname} onChange={this.changeFullNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <input placeholder="Address" name="address" className="form-control"
                                    value={this.state.address} onChange={this.changeaddressHandler}/>
                                </div>
                                <div className="form-group">
                                    <input placeholder="Parent Name" name="parentName" className="form-control"
                                    value={this.state.parentName} onChange={this.changeparentNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <input placeholder="Date Of birth" name="dob" className="form-control"
                                    value={this.state.dob} onChange={this.changedobHandler}/>
                                </div>
                                <div className="form-group">
                                    <input placeholder="Enrollment Date" name="enrollmentDate" className="form-control"
                                    value={this.state.enrollmentDate} onChange={this.changeenrollmentDateHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.saveOrUpdateStudents}>Save</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CreateStudentComponent;