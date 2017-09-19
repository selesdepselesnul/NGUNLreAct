import axios from 'axios';

export function setGradeRows(studentId) {
    return {
        type : 'SET_GRADE_ROWS',
        payload : studentId
    };
}

export function setGradeRowsBySubjectName(firstOldGradeRows, gradeRows, subjectName) {
    return {
        type : 'SET_GRADE_ROWS_BY_SUBJECT_NAME',
        payload : { 
            firstOldGradeRows,
            gradeRows, 
            subjectName 
        }
    };
}
