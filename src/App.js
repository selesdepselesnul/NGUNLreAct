import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GradeTable from './GradeTable';
import GradeFinder from './GradeFinder';
import "react-progress-2/main.css"
import Progress from "react-progress-2";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gradeRows : null
    };
  }

  setGradeRows(gradeRows) {
    console.log(gradeRows);
    this.setState({
      gradeRows: gradeRows
    });
  }

  render() {
    return (
      <div className="row">
        <Progress.Component/>
        <GradeFinder onFindSuccess={this.setGradeRows.bind(this)}/>
        <GradeTable gradeRows={this.state.gradeRows}/>
      </div>
    );
  }
}

export default App;
