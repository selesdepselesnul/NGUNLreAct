import React, { Component } from 'react';
import axios from 'axios';
import Progress from "react-progress-2";

class GradeTable extends Component {
  
  constructor(props) {
      super(props);

      var config = {
        headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      
  }
  
  render() {
    return (
        <table className="table table-bordered">
        </table>
    );
  }

  componentDidMount() {
    Progress.show();
    var params = new FormData();
    params.append('nim', '41155050140062');

    axios.post('https://cors-anywhere.herokuapp.com/http://www.unla.ac.id/index.php/e_akademic/c_kartuhasilstudi/grid', 
               params)
          .then(function (response) {
                console.log(response);
                Progress.hide();
          })
  }
}

export default GradeTable;