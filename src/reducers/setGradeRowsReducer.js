import React from 'react';
import ReactDOM from 'react-dom';
import R from 'ramda';
import Progress from "react-progress-2";

export default function setGradeRowsReducer(
    state = {
        gradeRows: [],
        firstOldGradeRows: []
    }, 
    action) {
    
    switch(action.type) {
        case "SET_GRADE_ROWS_FULFILLED":
            Progress.hide();
            
            const gradeRowsPayload =  action.payload ?  action.payload.data.data : [];
            return {
                gradeRows: gradeRowsPayload,
                firstOldGradeRows : gradeRowsPayload
            };
        case "SET_GRADE_ROWS_REJECTED":
            Progress.hide();
            return {
                gradeRows: [],
                firstOldGradeRows: []
            };
        case "SET_GRADE_ROWS_BY_SUBJECT_NAME":
            const payload = action.payload;
            Progress.hide();
            if(payload.subjectName == '') {
                return {
                    gradeRows: payload.firstOldGradeRows,
                    firstOldGradeRows: payload.firstOldGradeRows
                };
            } else {
                return {
                    gradeRows : R.filter(
                                    x => x.nmmk
                                        .toLocaleLowerCase()
                                        .match(payload.subjectName
                                                      .toLocaleLowerCase()), 
                                    payload.firstOldGradeRows),
                    firstOldGradeRows: payload.firstOldGradeRows
                };
            }
    }
    
    return state;
}