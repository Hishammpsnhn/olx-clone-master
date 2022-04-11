import React, { useState } from 'react';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth()
  const navigate = useNavigate()

  const handlelogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {

        navigate('/')
      })
      .catch((err) => {
        alert(err.message)
      })

  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlelogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        
          <a onClick={()=> navigate("/signup")}>Signup</a>
        
      </div>
    </div>
  );
}

export default Login;
