import React, { Component } from 'react';
import axios from 'axios';

class GradeTable extends Component {
  
  constructor(props) {
      super(props);

      var config = {
        headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      var params = new FormData();
      params.append('nim', '41155050140062');

      axios.post('https://cors-anywhere.herokuapp.com/http://www.unla.ac.id/index.php/e_akademic/c_kartuhasilstudi/grid', 
                 params, 
                 config)
            .then(function (response) {
                console.log(response);
            })
  }
  
  render() {
    return (
        <table className="table table-bordered">
        </table>
    );
  }
}

export default GradeTable;