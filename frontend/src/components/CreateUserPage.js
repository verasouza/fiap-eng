import React from 'react';
import { createUser } from '../api';
import UserForm from './UserForm';

const CreateUserPage = () => {
  const handleCreateUser = async (userData) => {
    await createUser(userData);
    alert('Usuário criado com sucesso!');
  };

  return (
    <div>
      <h1>Criar Usuário</h1>
      <UserForm onSubmit={handleCreateUser} />
    </div>
  );
};

export default CreateUserPage;