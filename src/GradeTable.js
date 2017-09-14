import React, { Component } from 'react';

class GradeTable extends Component {
  render() {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Kode Matkul</th>
                    <th>Nama Matkul</th>
                    <th>SKS</th>
                    <th>Nilai Huruf</th>
                    <th>Bobot</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    );
  }
}

export default GradeTable;