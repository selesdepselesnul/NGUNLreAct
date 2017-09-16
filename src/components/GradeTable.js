import React, { Component } from 'react';
import Progress from "react-progress-2";
import R from 'ramda';

const GradeTable = (props) => {
    const trGradeRows = 
        R.map(x => (<tr key={x.kdmk}>
                        <td>{x.kdmk}</td>
                        <td>{x.nmmk}</td>
                        <td>{x.nilaihuruf}</td>
                        <td>{x.bobotnilai}</td>
                    </tr>),
              props.gradeRows);
    
    return (
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
                {trGradeRows}
            </tbody>
        </table>
    );
};

export default GradeTable;