import React, { useState } from 'react';

const UserForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    email: initialData.email || '',
    password: initialData.password || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Nome"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button class="login" type="submit">Login</button>
    </form>
  );
};

export default UserForm;
