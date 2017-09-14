import React, { Component } from 'react';
import axios from 'axios';
import Progress from "react-progress-2";
import R from 'ramda';

class GradeFinder extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
        gradeRows: null,
        studentId: ''
    };
  }

  onKeyPressForId(event) {
    if(event.key == 'Enter') {
        Progress.show();
        var params = new FormData();
        params.append('nim', this.state.studentId);

        console.log(this.state.studentId);
        const self = this;
        axios.post('https://cors-anywhere.herokuapp.com/http://www.unla.ac.id/index.php/e_akademic/c_kartuhasilstudi/grid', 
                params)
            .then(response => {
                    const grades = response.data.data;
                    const rows = R.map(x => 
                        <tr>
                            <td>{x.nmmk}</td>
                            <td>{x.nilaihuruf}</td>
                            <td>{x.bobotnilai}</td>
                        </tr>
                    , grades);
                    
                    console.log(rows);
                    self.props.onFindSuccess(rows);
                    Progress.hide();
            });
    } else {
        this.setState({
            studentId: event.target.value
        })
    }
  }
  
  render() {
    return (
        <div className="input-group">
            <input type="text" 
                   className="form-control" 
                   placeholder="Search for..." 
                   aria-label="Search for..."
                   onKeyUp={this.onKeyPressForId.bind(this)}/>
        </div>
    );
  }
}

export default GradeFinder;