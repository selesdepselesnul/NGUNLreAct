import React, { Component } from "react";
import Progress from "react-progress-2";
import SubjectFinder from "../components/SubjectFinder";
import {connect} from "react-redux";
import { setGradeRowsBySubjectName } from "../actions/setGradeRowsAction";

const mapStateToProps = 
  (state) => ({ 
    subjectName : state.subjectName,
    isShown :  state.firstOldGradeRows == null ? false : (state.firstOldGradeRows.length > 0 && state.subjectName !== '')
  });

const mapDispatchToProps = 
  (dispatch) => ({
      setGradeRowsBySubjectName: 
        (subjectName) => {
              Progress.show();
              dispatch(setGradeRowsBySubjectName(subjectName))
        }
  });

const SubjectFinderContainer = connect(mapStateToProps, mapDispatchToProps)(SubjectFinder);
export default SubjectFinderContainer;