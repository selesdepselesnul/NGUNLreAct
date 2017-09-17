import React, { Component } from 'react';
import Progress from "react-progress-2";

const SUBJECT_BY_NAME_PLACEHOLDER = 'Ketik nama matkul disini untuk mecari...';
const SubjectFinder = (props) => {
  
  const onKeyPressSubject = (event) => {
      Progress.show();
      props.onFindSuccess(props.firstOldGradeRows, 
                          props.gradeRows, 
                          event.target.value);
  };

  return (
      <div className={props.firstOldGradeRows.length > 0 && props.subjectName !== '' ? 
                      "col-md-12" 
                      : "hidden"}>
        <div className="input-group">
            <input type="text" 
                    className="form-control text-center lead" 
                    placeholder={SUBJECT_BY_NAME_PLACEHOLDER} 
                    aria-label={SUBJECT_BY_NAME_PLACEHOLDER}
                    style={{border: '0'}}
                    onKeyUp={onKeyPressSubject}/>
        </div>
      </div>
  );
  
};
  

export default SubjectFinder;