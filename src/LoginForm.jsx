import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  let navigate = useNavigate();

  const routeChange = () => {
    let path = '/signup';
    navigate(path);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const body = {
      username,
      password,
    };

    try {
      const res = await fetch('http://localhost:3002/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        handleLogin();
      } else {
        const errorText = await res.text();
        setErrorMsg(errorText);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setErrorMsg(error.message);
    }
  };

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="login-button" type="submit">
        Login
      </button>

      <div className="error-container">{errorMsg && <p>{errorMsg}</p>}</div>

      <button className="signup-button" onClick={routeChange}>
        Sign up
      </button>
    </form>
  );
};

export default LoginForm;

