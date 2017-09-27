import React, { Component } from 'react';
import Progress from "react-progress-2";

const SUBJECT_BY_NAME_PLACEHOLDER = 'Ketik nama matkul disini untuk mencari...';
const SubjectFinder = ({setGradeRowsBySubjectName, isShown}) => {

  const onKeyUp = (event) => {
    if(event.key !== 'Enter') {
      setGradeRowsBySubjectName(event.target.value);
    }
  }

  return (
      <div className={isShown ? "col-md-12" : "hidden"}>
        <div className="input-group">
            <input type="text" 
                    className="form-control text-center lead" 
                    placeholder={SUBJECT_BY_NAME_PLACEHOLDER} 
                    aria-label={SUBJECT_BY_NAME_PLACEHOLDER}
                    style={{border: '0'}}
                    onKeyUp={onKeyUp}
                    ref={input => input && input.focus()}/>
        </div>
      </div>
  );
};
  

export default SubjectFinder;