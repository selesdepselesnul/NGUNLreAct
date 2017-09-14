import React, { Component } from 'react';
import axios from 'axios';
import Progress from "react-progress-2";
import R from 'ramda';

class GradeTable extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Nama MK</th>
                    <th>Nilai</th>
                    <th>Angka</th>
                </tr>
            </thead>
            <tbody>
                {this.props.gradeRows}
            </tbody>
        </table>
    );
  }
}

export default GradeTable;