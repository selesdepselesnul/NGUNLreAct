import React, { Component } from 'react';
import Progress from "react-progress-2";
import R from 'ramda';

class GradeTable extends React.Component {
    
    render() {
        return (<table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Kode MK</th>
                            <th>Nama MK</th>
                            <th>Nilai</th>
                            <th>Angka</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.gradeRows}
                    </tbody>
                </table>);
    }

    componentWillReceiveProps() {
        Progress.hide();
    }

}

export default GradeTable;