import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user._id !== id));
  };

  const newUser = async() => {
    alert('criar usuário!')
  }

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <div>
        <hr></hr>
        <table>
          <tbody>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
          {users.map((user) => (
            <tr>
              <td class={"id"}>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td class={"actions"}>
                <button className='remove' onClick={() => handleDelete(user._id)}>Excluir</button>
                <button className='edit' onClick={() => alert('editado!')}>Editar</button>
              </td>
            </tr>
          ))}
          </tbody>
          <tr class={"create"}>
            <button className='create' onClick={() => newUser()}>Criar</button>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default UserList;
