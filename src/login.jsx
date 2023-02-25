import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {
  useNavigate as Navigate
} from "react-router-dom";

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark bg-maroon">
                <label className="navbar-brand">ABSOLUTE MEDIA, INC.</label>                
            </nav>

      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input className = "username_box" type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <div className='password'>
        <label>
          <p>Password</p>
          <input className = "password_box" type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        </div>
        <div>
        <button className="login-button"  type="submit">Log In</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};