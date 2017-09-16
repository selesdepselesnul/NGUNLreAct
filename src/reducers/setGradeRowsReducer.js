import React from 'react';
import ReactDOM from 'react-dom';
import R from 'ramda';
import Progress from "react-progress-2";

export default function setGradeRowsReducer(
    state = {
        gradeRows: []
    }, 
    action) {
    
    switch(action.type) {
        case "SET_GRADE_ROWS_FULFILLED":
            Progress.hide();
            return {
                gradeRows: action.payload.data.data
            };
        case "SET_GRADE_ROWS_BY_SUBJECT_NAME":
            const payload = action.payload;
            Progress.hide();
            console.log(payload.subjectName);
            if(payload.subjectName == '') {
                return {
                    gradeRows: payload.gradeRows
                };
            } else {
                return {
                    gradeRows : R.filter(
                                    x => x.nmmk
                                        .toLocaleLowerCase()
                                        .match(payload.subjectName
                                                        .toLocaleLowerCase()), 
                                    payload.gradeRows)
                };
            }
    }
    
    return state;
}