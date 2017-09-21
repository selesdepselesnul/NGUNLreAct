import React, { Component } from "react";
import Progress from "react-progress-2";
import SubjectFinder from "../components/SubjectFinder"

const SUBJECT_BY_NAME_PLACEHOLDER = 'Ketik nama matkul disini untuk mecari...';
const SubjectFinderContainer = (props) => {
  
  const onKeyPressSubject = (event) => {
      Progress.show();
      props.onFindSuccess(props.firstOldGradeRows, 
                          props.gradeRows, 
                          event.target.value);
  };

  const isSubjectFinderShown = props.firstOldGradeRows.length > 0 && props.subjectName !== '';
  return (<SubjectFinder onKeyUp={onKeyPressSubject} isShown={isSubjectFinderShown}/>);

};
  

export default SubjectFinderContainer;