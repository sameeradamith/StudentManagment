import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListStudentComoponent from './comoponents/ListStudentComoponent';
import HeaderComponent from './comoponents/HeaderComponent';
import CreateStudentComponent from './comoponents/CreateStudentComponent';
import UpdateStudentComponent from './comoponents/UpdateStudentComponent';

import ListGradeComoponent from './comoponents/ListGradeComoponent';
import CreateGradeComponent from './comoponents/CreateGradeComponent';
import UpdateGradeComponent from './comoponents/UpdateGradeComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListStudentComoponent}></Route>
            <Route path="/students" component={ListStudentComoponent}></Route>
            <Route path="/add-student" component={CreateStudentComponent}></Route>
            <Route path="/update-student/:id" component={UpdateStudentComponent}></Route>

            <Route path="/grades" component={ListGradeComoponent}></Route>
            <Route path="/add-grade" component={CreateGradeComponent}></Route>
            <Route path="/update-grade/:id" component={UpdateGradeComponent}></Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
