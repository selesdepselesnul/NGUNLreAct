import React, { Component } from 'react';
import GradeTable from '../components/GradeTable';
import Progress from "react-progress-2";
import R from 'ramda';

class GradeTableContainer extends React.Component {
    
    render() {
        const trGradeRows = 
        R.map(x => (<tr key={x.kdmk}>
                        <td>{x.kdmk}</td>
                        <td>{x.nmmk}</td>
                        <td>{x.nilaihuruf}</td>
                        <td>{x.bobotnilai}</td>
                    </tr>),
              this.props.gradeRows);
    
    
        return (<GradeTable rows={trGradeRows}/>);
    }

    componentWillReceiveProps() {
        Progress.hide();
    }
}

export default GradeTableContainer;