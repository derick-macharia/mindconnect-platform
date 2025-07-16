import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let temp = {};
    if (!form.name) temp.name = 'Name is required.';
    if (!form.email) temp.email = 'Email is required.';
    if (!form.password || form.password.length < 6)
      temp.password = 'Password must be at least 6 characters.';
    if (!form.role) temp.role = 'Select a role.';
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('✅ Signed up successfully!');
      navigate('/');
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up for MindConnect</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <small>{errors.name}</small>}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <small>{errors.email}</small>}

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <small>{errors.password}</small>}

        <select name="role" value={form.role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="therapist">Therapist</option>
        </select>
        {errors.role && <small>{errors.role}</small>}

        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <button className="link" onClick={() => navigate('/')}>
          Login
        </button>
      </p>
    </div>
  );
}

export default Signup;
