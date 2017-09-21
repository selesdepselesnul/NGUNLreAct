import React, { Component } from 'react';
import GradeTable from '../components/GradeTable';
import Progress from "react-progress-2";
import R from 'ramda';

const GradeTableContainer = (props) => {
    const trGradeRows = 
        R.map(x => (<tr key={x.kdmk}>
                        <td>{x.kdmk}</td>
                        <td>{x.nmmk}</td>
                        <td>{x.nilaihuruf}</td>
                        <td>{x.bobotnilai}</td>
                    </tr>),
              props.gradeRows);
    
    return (<GradeTable rows={trGradeRows}/>);
};

export default GradeTableContainer;