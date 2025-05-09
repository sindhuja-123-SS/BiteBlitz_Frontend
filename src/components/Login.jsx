import React, { useState } from 'react';
import '../styles/Login.css'
const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate email verification
    if (email.endsWith('@sece.ac.in')) {
      setCurrentPage('home');
    } else {
      alert('Please use a valid college email ID');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome to Food Pre-ordering</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="College Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="forgot-password">
        <a href="#" onClick={() => alert('Password reset link sent to your email')}>
          Forgot Password?
        </a>
      </p>
    </div>
  );
};

export default Login;