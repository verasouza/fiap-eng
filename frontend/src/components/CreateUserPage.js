import React from 'react';
import { createUser } from '../api';
import UserForm from './UserForm';

const CreateUserPage = () => {
  const handleCreateUser = async (userData) => {
    try {
      await createUser(userData);
      alert('Usuário criado com sucesso!');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('Erro 400: Dados inválidos. Por favor, revise as informações enviadas.');
      } else {
        console.error('Erro inesperado:', error);
        alert('Ocorreu um erro inesperado. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <div>
      <h1>Criar Usuário</h1>
      <UserForm onSubmit={handleCreateUser} />
    </div>
  );
};

export default CreateUserPage;
