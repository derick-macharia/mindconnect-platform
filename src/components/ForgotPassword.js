import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailOrPhone) {
      setMessage('Please enter your email or phone.');
      return;
    }

    // Simulate password reset
    setMessage('If this account exists, a reset link will be sent.');
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Email or Phone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
        <button type="submit">Send Reset Link</button>
        {message && <small>{message}</small>}
      </form>
      <p>
        <button className="link" onClick={() => navigate('/')}>
          Back to Login
        </button>
      </p>
    </div>
  );
}

export default ForgotPassword;
