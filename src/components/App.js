import React, { Component } from "react";
import GradeTableContainer from '../containers/GradeTableContainer';
import GradeFinderContainer from '../containers/GradeFinderContainer';
import SubjectFinderContainer from '../containers/SubjectFinderContainer';
import TotalScoreContainer from '../containers/TotalScoreContainer';
import GithubBadge from './GithubBadge';
import "react-progress-2/main.css"
import Progress from "react-progress-2";

const App = (props) => (
    <div className="row">
      <Progress.Component/>
      <GithubBadge/>
      <GradeFinderContainer />
      <SubjectFinderContainer />
      <TotalScoreContainer />
      <GradeTableContainer />
    </div>
);

export default App;