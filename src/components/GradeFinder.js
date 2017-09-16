import React, { Component } from 'react';
import Progress from "react-progress-2";

const GradeFinder = (props) => {
  
  const onKeyPressForId = (event) => {
    if(event.key == 'Enter') {
      Progress.show();
      props.onFindSuccess(event.target.value);
    } 
  };

  return (
      <div className="input-group">
          <input type="text" 
                  className="form-control" 
                  placeholder="Ketik NPM disini lalu tekan enter..." 
                  aria-label="Ketik NPM disini lalu tekan enter..."
                  style={{fontSize: '240%'}}
                  onKeyUp={onKeyPressForId}/>
      </div>
  );
  
};
  

export default GradeFinder;