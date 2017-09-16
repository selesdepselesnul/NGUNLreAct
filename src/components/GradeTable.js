import React, { Component } from 'react';
import axios from 'axios';
import Progress from "react-progress-2";
import R from 'ramda';

const GradeTable = (props) => (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Kode MK</th>
                    <th>Nama MK</th>
                    <th>Nilai</th>
                    <th>Angka</th>
                </tr>
            </thead>
            <tbody>
                {props.gradeRows}
            </tbody>
        </table>
    );

export default GradeTable;