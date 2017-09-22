import React, { Component } from 'react';
import GradeTable from '../components/GradeTable';
import Progress from "react-progress-2";
import {connect} from "react-redux";
import R from 'ramda';

const mapStateToProps = 
    (state) => ({ 
        gradeRows: state.gradeRows == null 
                   ? '' 
                   : R.map(x => (<tr key={x.kdmk}>
                                    <td>{x.kdmk}</td>
                                    <td>{x.nmmk}</td>
                                    <td>{x.nilaihuruf}</td>
                                    <td>{x.bobotnilai}</td>
                                 </tr>),
                           state.gradeRows)
    });

const GradeTableContainer = connect(mapStateToProps)(GradeTable);
export default GradeTableContainer;