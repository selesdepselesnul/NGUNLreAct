import React, { Component } from "react";
import {connect} from "react-redux";
import GradeTable from '../components/GradeTable';
import GradeFinder from '../components/GradeFinder';
import GithubBadge from '../components/GithubBadge';
import SubjectFinder from '../components/SubjectFinder';
import { setGradeRows, setGradeRowsBySubjectName } from "../actions/setGradeRowsAction";
import "react-progress-2/main.css"
import Progress from "react-progress-2";

const App = (props) => (
    <div className="row">
      <Progress.Component/>
      <GithubBadge/>
      <GradeFinder onFindSuccess={props.setGradeRows}/>
      <SubjectFinder gradeRows={props.gradeRows}
                     firstOldGradeRows={props.firstOldGradeRows} 
                     onFindSuccess={props.setGradeRowsBySubjectName}/>
      <GradeTable gradeRows={props.gradeRows}/>
    </div>
);

const mapStateToProps = 
    (state) => ({ 
      gradeRows: state.gradeRows || [],
      firstOldGradeRows: state.firstOldGradeRows || []
    });

const mapDispatchToProps = 
    (dispatch) => ({
        setGradeRows: (studentId) => dispatch(setGradeRows(studentId)),
        setGradeRowsBySubjectName: 
          (firstOldGradeRows, gradeRows, subjectName) => 
              dispatch(setGradeRowsBySubjectName(firstOldGradeRows, gradeRows, subjectName))
    });

export default connect(mapStateToProps, mapDispatchToProps)(App);