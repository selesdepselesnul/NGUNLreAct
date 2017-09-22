import React, { Component } from "react";
import GradeTableContainer from './GradeTableContainer';
import GradeFinderContainer from './GradeFinderContainer';
import GithubBadge from '../components/GithubBadge';
import SubjectFinderContainer from './SubjectFinderContainer';
import "react-progress-2/main.css"
import Progress from "react-progress-2";

const App = (props) => (
    <div className="row">
      <Progress.Component/>
      <GithubBadge/>
      <GradeFinderContainer />
      <SubjectFinderContainer />
      <GradeTableContainer />
    </div>
);

export default App;