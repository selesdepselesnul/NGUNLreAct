import React, { Component } from 'react';
import Progress from "react-progress-2";

const FILTER_BY_STUDENT_ID_PLACEHOLDER = 'Ketik NPM disini lalu tekan enter...';
const GradeFinder = (props) => {
  
  const onKeyPressForId = (event) => {
    if(event.key === 'Enter') {
      Progress.show();
      props.onFindSuccess(event.target.value);
    } 
  };

  return (
      <div className="col-md-12">
        <div className="input-group">
            <input type="text" 
                   className="form-control text-center lead" 
                   placeholder={FILTER_BY_STUDENT_ID_PLACEHOLDER}
                   aria-label={FILTER_BY_STUDENT_ID_PLACEHOLDER}
                   style={{border: '0'}}
                   onKeyUp={onKeyPressForId}/>
        </div>
      </div>
  );
  
};
  

export default GradeFinder;