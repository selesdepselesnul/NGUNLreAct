import React from 'react';
import ReactDOM from 'react-dom';
import R from 'ramda';
import Progress from "react-progress-2";

export default function setGradeRowsReducer(state = {
    gradeRows: ''
}, action) {
    switch(action.type) {
        case "SET_GRADE_ROWS_FULFILLED":
            const grades = action.payload.data.data;
            const rows = R.map(x => 
                <tr>
                    <td>{x.nmmk}</td>
                    <td>{x.nilaihuruf}</td>
                    <td>{x.bobotnilai}</td>
                </tr>
            , grades);
            
            Progress.hide();
            return {
                gradeRows: rows
            }
    }
    return state;
}