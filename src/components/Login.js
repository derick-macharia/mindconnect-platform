import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailOrPhone || !password) {
      setError('All fields are required.');
      return;
    }

    alert('✅ Logged in successfully!');
    setError('');
  };

  return (
    <div className="auth-container">
      <h2>Login to MindConnect</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email or Phone Number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <small>{error}</small>}
        <p className="forgot">
  <button className="link" onClick={() => navigate('/forgot-password')}>
    Forgot Password?
  </button>
</p>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <button className="link" onClick={() => navigate('/signup')}>
          Sign Up
        </button>
      </p>
    </div>
  );
}

export default Login;