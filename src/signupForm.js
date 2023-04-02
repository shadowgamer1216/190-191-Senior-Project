import { useState } from 'react';
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
        body: JSON.stringify({ username, password }),
      });
      if (res.status === 200) {
        // Redirect to login page after successful signup
        window.location.href = '/';
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

        <button className="signup-button" type="submit">Sign up</button>
        <button className="cancel-button" onClick={(e) => {e.preventDefault(); navigate('/');}}>Cancel</button>


        {errorMsg && <p>{errorMsg}</p>}
      </form>
    </div>
  );
};

export default SignupForm;

