import React, { Component } from "react";
import Progress from "react-progress-2";
import SubjectFinder from "../components/SubjectFinder";
import {connect} from "react-redux";
import { setGradeRowsBySubjectName } from "../actions/setGradeRowsAction";

const mapStateToProps = 
(state) => ({ 
  gradeRows: state.gradeRows || [],
  firstOldGradeRows: state.firstOldGradeRows || [],
  subjectName : state.subjectName
});

const mapDispatchToProps = 
(dispatch) => ({
    setGradeRowsBySubjectName: 
      (firstOldGradeRows, gradeRows, subjectName) => {
            Progress.show();
            dispatch(setGradeRowsBySubjectName(firstOldGradeRows, gradeRows, subjectName))
      }
});

const SubjectFinderContainer = connect(mapStateToProps, mapDispatchToProps)(SubjectFinder);
export default SubjectFinderContainer;