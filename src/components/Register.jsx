import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'public'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/register', formData);
      console.log('Registration Successful', response.data);
    } catch (error) {
      console.error('Registration Failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="public">Public</option>
        <option value="volunteer">Volunteer</option>
        <option value="organization">Organization</option>
        <option value="orphan">Orphan</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
