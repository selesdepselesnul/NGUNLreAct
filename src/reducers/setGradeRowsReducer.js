import React from 'react';
import ReactDOM from 'react-dom';
import R from 'ramda';
import Progress from "react-progress-2";
import axios from 'axios';
import {Observable} from 'rxjs';

const SET_GRADE_ROWS = "SET_GRADE_ROWS";
const SET_GRADE_ROWS_FULFILLED = "SET_GRADE_ROWS_FULFILLED";
const SET_GRADE_ROWS_REJECTED = "SET_GRADE_ROWS_REJECTED";
const SET_GRADE_ROWS_BY_SUBJECT_NAME = "SET_GRADE_ROWS_BY_SUBJECT_NAME";

export function setGradeRowsReducer(
    state = {
        gradeRows: [],
        firstOldGradeRows: []
    }, 
    action) {
    
    switch(action.type) {
        case SET_GRADE_ROWS_FULFILLED:            
            return {
                gradeRows: action.payload,
                firstOldGradeRows : action.payload
            };
        case SET_GRADE_ROWS_REJECTED:
            return {
                gradeRows: action.payload,
                firstOldGradeRows: action.payload
            };
        case SET_GRADE_ROWS_BY_SUBJECT_NAME:
            const payload = action.payload;
            if(payload.subjectName == '') {
                return {
                    gradeRows: state.firstOldGradeRows,
                    firstOldGradeRows: state.firstOldGradeRows
                };
            } else {
                return {
                    gradeRows : R.filter(
                                    x => x.nmmk
                                        .toLocaleLowerCase()
                                        .match(payload.subjectName
                                                      .toLocaleLowerCase()), 
                                    state.firstOldGradeRows),
                    firstOldGradeRows: state.firstOldGradeRows
                };
            }
    }
    
    return state;
}

function setGradeRowsFulfilled(res) {
    return {
        type: SET_GRADE_ROWS_FULFILLED,
        payload: res.response.data
    }
}

export function setGradeRowsEpic(action$) {
    const url = 
        'https://cors-anywhere.herokuapp.com/http://www.unla.ac.id/index.php/e_akademic/c_kartuhasilstudi/grid';
    return action$.filter(action => action.type === SET_GRADE_ROWS)
                  .switchMap(action => {
                        return Observable
                                .ajax
                                .post(url, {'nim': action.payload})                        
                                .map(res => setGradeRowsFulfilled(res))
                                .catch(error => Observable.of({
                                    type: SET_GRADE_ROWS_REJECTED,
                                    payload: []
                                }))
                   })
}
