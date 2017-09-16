import React, { Component } from 'react';
import {connect} from "react-redux";
import GradeTable from '../components/GradeTable';
import GradeFinder from '../components/GradeFinder';
import { setGradeRows } from "../actions/setGradeRowsAction";
import "react-progress-2/main.css"
import Progress from "react-progress-2";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <Progress.Component/>
        <GradeFinder onFindSuccess={(gradeRows) => this.props.setGradeRows(gradeRows)}/>
        <GradeTable gradeRows={this.props.gradeRows}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gradeRows: state.gradeRows
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setGradeRows: (studentId) => {
            dispatch(setGradeRows(studentId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
