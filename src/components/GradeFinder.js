import React, { Component } from 'react';
import Progress from "react-progress-2";

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
                    placeholder="Ketik NPM disini lalu tekan enter..." 
                    aria-label="Ketik NPM disini lalu tekan enter..."
                    style={{border: '0'}}
                    onKeyUp={onKeyPressForId}/>
        </div>
      </div>
  );
  
};
  

export default GradeFinder;