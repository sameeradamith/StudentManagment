import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="/" className="navbar-brand">Student Managmnet System</a>
                        </div>
                        <ul className="navbar-nav ml-4">
                            <li className="nav-item">
                                <a className="nav-link" href="/students">Students</a>
                            </li>
                            <li className="nav-item ml-4">
                                <a className="nav-link" href="/Grades">Class</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;