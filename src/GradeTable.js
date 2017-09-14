import React, { Component } from 'react';
import axios from 'axios';
import Progress from "react-progress-2";
import R from 'ramda';

class GradeTable extends Component {
  
  constructor(props) {
      super(props);

      this.state = {
          gradeRows: null
      };

      var config = {
        headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      
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
                {this.state.gradeRows}
            </tbody>
        </table>
    );
  }

  componentDidMount() {
    Progress.show();
    var params = new FormData();
    params.append('nim', '41155050140062');

    const self = this;
    axios.post('https://cors-anywhere.herokuapp.com/http://www.unla.ac.id/index.php/e_akademic/c_kartuhasilstudi/grid', 
               params)
          .then(function (response) {
                const grades = response.data.data;
                const rows = R.map(x => 
                    <tr>
                        <td>{x.nmmk}</td>
                        <td>{x.nilaihuruf}</td>
                        <td>{x.bobotnilai}</td>
                    </tr>
                , grades);

                self.setState({
                    gradeRows : rows
                });
          })
  }
}

export default GradeTable;