import React, { Component } from 'react';
import GradeFinder from '../components/GradeFinder';
import Progress from "react-progress-2";

const FILTER_BY_STUDENT_ID_PLACEHOLDER = 'Ketik NPM disini lalu tekan enter...';

const GradeFinderContainer = (props) => {
    
    const onKeyPressForId = (event) => {
        if(event.key === 'Enter') {
            Progress.show();
            props.onFindSuccess(event.target.value);
        } 
    };
    
    return (<GradeFinder onKeyUp={onKeyPressForId}/>);

};
  

export default GradeFinderContainer;