// MyProfile.js
import React, { Component } from 'react';
import { getSession } from './main';
import './profile.css';
import Axios from 'axios';

class MyProfile extends Component {
  componentDidMount() {
    this.profileInfo();
  }

  profileInfo() {
    var url = "http://localhost:5000/myprofile/info";
    Axios.post(url, { emailid: getSession("sid") })
      .then(res => this.loadInfo(res))
      .catch(err => this.errorResponse(err));
  }

  loadInfo(res) {
    var data = res.data;
    var L1 = document.getElementById('L1');
    var L2 = document.getElementById('L2');
    var L3 = document.getElementById('L3');
    var L4 = document.getElementById('L4');
    if (L1 && L2 && L3 && L4) {
      L1.innerHTML = `<b style='color:red'>${data[0].firstname}</b>`;
      L2.innerText = data[0].lastname;
      L3.innerText = data[0].contactno;
      L4.innerText = data[0].emailid;
    } else {
      console.error("DOM elements not found");
    }
  }

  errorResponse(err) {
    console.error("Axios Error:", err);
    // Handle error response if needed
  }

  render() {
    return (
      <div className='full-height'>
        <h3>User Profile</h3>
        <table className='tablestyle'>
          <tr>
            <td className='firstcolumn'>First Name</td>
            <td><label id='L1'></label></td>
          </tr>
          <tr>
            <td className='firstcolumn'>Last Name</td>
            <td><label id='L2'></label></td>
          </tr>
          <tr>
            <td className='firstcolumn'>Contact No.</td>
            <td><label id='L3'></label></td>
          </tr>
          <tr>
            <td className='firstcolumn'>Email Id</td>
            <td><label id='L4'></label></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default MyProfile;
