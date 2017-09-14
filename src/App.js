import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GradeTable from './GradeTable';
import "react-progress-2/main.css"
import Progress from "react-progress-2";

class App extends Component {
  render() {
    return (
      <div className="row">
        <Progress.Component/>
        <GradeTable/>
      </div>
    );
  }
}

export default App;
