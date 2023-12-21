import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
function Signup() {
  return (
    <body>
    <div className="App">
  <center>
    <form>
      <br></br>
      <h3><b className='b'>SIGN UP</b></h3>
    <table>
      <br></br>
        <tr>
          <td><label>UserName</label></td>
          <td>:</td>
          <td><input type="text" required></input></td>
        </tr>
        <br></br>
        <tr>
          <td><label>Email</label></td>
          <td>:</td>
          <td><input type="email" required></input></td>
        </tr>
        <br></br>
        <tr>
          <td><label>Phone Number</label></td>
          <td>:</td>
          <td><input type="number" required></input></td>
        </tr>
        <br></br>
        <tr>
          <td><label>Enter Password</label></td>
          <td>:</td>
          <td><input type="password" required></input></td>
        </tr>
        <br></br>
        <tr>
          <td><label>ReEnter Password</label></td>
          <td>:</td>
          <td><input type="password" required></input></td>
        </tr>
        <br></br>
    </table>
    <Link to='/'><button>SIGN UP</button></Link>
    <br></br>
    <br></br>
      </form>
    </center>
    </div>
    </body>
  );
}

export default Signup;
