// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './_login.scss';

const Login = () => {
  const [email, setEmail] = useState(''); // Use state for email
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make sure to send the email and password
      const response = await axios.post('http://localhost:5001/login', { email, password });
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data || 'Error logging in');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Log In</button>
        <button type="button" className="register-button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;




