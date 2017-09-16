import React, { Component } from 'react';
import {connect} from "react-redux";
import GradeTable from '../components/GradeTable';
import GradeFinder from '../components/GradeFinder';
import GithubBadge from '../components/GithubBadge';
import { setGradeRows } from "../actions/setGradeRowsAction";
import "react-progress-2/main.css"
import Progress from "react-progress-2";

const App = (props) => {
  return (
    <div className="row">
      <Progress.Component/>
      <GithubBadge/>
      <GradeFinder onFindSuccess={props.setGradeRows}/>
      <GradeTable gradeRows={props.gradeRows}/>
    </div>
  );
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