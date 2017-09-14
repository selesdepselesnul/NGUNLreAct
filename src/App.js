import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GradeTable from './GradeTable';

class App extends Component {
  render() {
    return (
      <div className="row">
        <GradeTable/>
      </div>
    );
  }
}

export default App;
