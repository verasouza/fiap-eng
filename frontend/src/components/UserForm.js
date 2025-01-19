import React, { useState } from 'react';

const UserForm = ({ user, onSubmit }) => {
  const [formData, setFormData] = useState(user || {name:'', email: '', age: ''} );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div class={"userFormPanel"}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Idade"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <div class={"userFormLowerPanel"}>
          <button class="create" type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
