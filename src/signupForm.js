import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth} from './firebase';
import Axios from "axios";



const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [viewOnly, setViewOnly] = useState(false);
  const navigate = useNavigate();

  const insertUser = () => {
    Axios.post("http://localhost:3001/api/viewonly", {user: email, viewOnly: viewOnly})
  }

  const routeChange = () => {
    let path = '/login';
    navigate(path);
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');

    if (!authToken) {
      routeChange();
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        insertUser();

        navigate('/');

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main>
      <section>
        <div>
          <div>
            <div className='HomePageBar'>
              <nav className='navbar navbar-dark bg-maroon'>
                <label className='navbar-brand'>ABSOLUTE MEDIA, INC.</label>
              </nav>
            </div>
            <form>
              <div>
                <div>
                  <label htmlFor='email-address'>Email address</label>
                </div>
                <input
                  type='email'
                  label='Email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='Email address'
                />
              </div>

              <div>
                <div>
                  <label htmlFor='password'>Password</label>
                </div>

                <input
                  type='password'
                  label='Create password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder='Password'
                />
              </div>

              <div>
                <div>
                  <label htmlFor='view-only'>View Only</label>
                </div>
                <input
                  type='checkbox'
                  id='view-only'
                  name='view-only'
                  checked={viewOnly}
                  onChange={(e) => setViewOnly(e.target.checked)}
                />
              </div>

              <div>
                <button className='login-button' type='submit' onClick={onSubmit}>
                  Sign up
                </button>
              </div>
            </form>

            <button className='cancel-button' onClick={(e) => { e.preventDefault(); navigate('/'); }}>
              Cancel
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;


/*import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

import './App.css';

const SignupForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errorMsg) setErrorMsg('');

    if (password !== confirmPassword) {
      setErrorMsg(`The passwords don't match`);
      return;
    }

    try {
      const res = await fetch('http://localhost:3004/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, viewOnly: document.getElementById('viewOnly').checked }),
      });
      if (res.status === 200) {
        // Redirect to login page after successful signup
        navigate('/');
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <div>

          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
          <label htmlFor="password">Password</label>
          <div>

          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <div>
            

          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        
      <div className="checkbox-container">
      <input type="checkbox" id="viewOnly" name="viewOnly" value="true" />
      </div>
      <label htmlFor="viewOnly">View Only</label>

        


        <div className="signup-button-container">
        <button className="signup-button2" type="submit">Sign up</button>
        <button className="cancel-button" onClick={(e) => {e.preventDefault(); navigate('/');}}>Cancel</button>
        </div>


        {errorMsg && <p>{errorMsg}</p>}
      </form>
    </div>
  );
};

export default SignupForm;*/

