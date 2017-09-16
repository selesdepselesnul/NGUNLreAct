import axios from 'axios';

export function setGradeRows(studentId) {
    var params = new FormData();
    params.append('nim', studentId);
    return {
        type : 'SET_GRADE_ROWS',
        payload : axios.post(
                    'https://cors-anywhere.herokuapp.com/http://www.unla.ac.id/index.php/e_akademic/c_kartuhasilstudi/grid', 
                    params)
    };
}

export function setGradeRowsBySubjectName(gradeRows, subjectName) {
    return {
        type : 'SET_GRADE_ROWS_BY_SUBJECT_NAME',
        payload : { gradeRows, subjectName }
    };
}