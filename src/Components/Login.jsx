import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <body>
    <div className="App">
  <center>
    <form class="form">
      <br></br>
    <h3>LOGIN</h3>
    <br></br>
        <input type="text" placeholder='ENTER USERNAME'required className='text-1'></input>
      <br></br>
      <br></br>
        <input type="password" placeholder='ENTER PASSWORD' required className='text-1'></input>
      <br></br>
      <br></br>
      <Link to='/'><button>SIGN IN</button></Link>
      <br></br>
      <br></br>
      <br></br>
      <p><b>Don't have an account?  </b><u><b class="b"><Link to='/signup'>Sign up</Link></b></u></p>
      <br></br>
    </form>
    </center>
    </div>
    <body>
        
    </body></body>
  );
}

export default Login;
