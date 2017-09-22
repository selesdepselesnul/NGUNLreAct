import React, { Component } from 'react';
import GradeFinder from '../components/GradeFinder';
import Progress from "react-progress-2";
import { setGradeRows } from "../actions/setGradeRowsAction";
import {connect} from "react-redux";


const mapDispatchToProps = 
    (dispatch) => ({
        setGradeRows: (studentId) => {
            Progress.show();
            dispatch(setGradeRows(studentId))
        }
    });

const GradeFinderContainer = connect(null, mapDispatchToProps)(GradeFinder);
export default GradeFinderContainer;