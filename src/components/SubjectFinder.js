import React, { Component } from 'react';
import Progress from "react-progress-2";

const SubjectFinder = (props) => {
  
  const onKeyPressSubject = (event) => {
    if(event.key == 'Enter') {
      Progress.show();
      props.onFindSuccess(props.gradeRows, event.target.value);
    } 
  };

  return (
      <div className={props.gradeRows.length > 0 ? "col-md-12" : "hidden"}>
        <div className="input-group">
            <input type="text" 
                    className="form-control text-center lead" 
                    placeholder="Ketik Nama matkul disini lalu tekan enter..." 
                    aria-label="Ketik Nama matkul disini lalu tekan enter..."
                    style={{border: '0'}}
                    onKeyUp={onKeyPressSubject}/>
        </div>
      </div>
  );
  
};
  

export default SubjectFinder;