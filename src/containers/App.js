import React, { Component } from "react";
import {connect} from "react-redux";
import GradeTableContainer from './GradeTableContainer';
import GradeFinderContainer from './GradeFinderContainer';
import GithubBadge from '../components/GithubBadge';
import SubjectFinderContainer from './SubjectFinderContainer';
import { setGradeRows, setGradeRowsBySubjectName } from "../actions/setGradeRowsAction";
import "react-progress-2/main.css"
import Progress from "react-progress-2";

const App = (props) => (
    <div className="row">
      <Progress.Component/>
      <GithubBadge/>
      <GradeFinderContainer onFindSuccess={props.setGradeRows}/>
      <SubjectFinderContainer gradeRows={props.gradeRows}
                              firstOldGradeRows={props.firstOldGradeRows} 
                              onFindSuccess={props.setGradeRowsBySubjectName}/>
      <GradeTableContainer gradeRows={props.gradeRows}/>
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