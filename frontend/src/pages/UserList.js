import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  const previousPage = () => {
    alert('página anterior!')
  }

  const nextPage = () => {
    alert('próxima página!')
  }

  let pages = 0;
  let index = 0;
  const getPageIndexes = (pages) => {
    return (
      <div>

      </div>
    )
  }

  return (
    <div class={'outer'}>
      <h2>Lista de Usuários</h2>
      <div class={'inner'}>
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
                <button className='remove' onClick={() => handleDelete(user._id)}><FontAwesomeIcon icon="fa-solid fa-user-xmark" /><span>Excluir</span></button>
                <button className='edit' onClick={() => alert('editado!')}><FontAwesomeIcon icon="fa-solid fa-user-pen" /><span>Editar</span></button>
              </td>
            </tr>
          ))}
          </tbody>
          <tr class={"controls"}>
            <button className='create' onClick={() => newUser()}><FontAwesomeIcon icon={"fa-solid fa-user-plus"} /><span>Criar</span></button>
            <button className='previous' onClick={() => previousPage()}><FontAwesomeIcon icon="fa-solid fa-less-than" /></button>
            { pages = Math.floor(users.length / 10) }
            { getPageIndexes(pages) }
            <button className='next' onClick={() => nextPage()}><FontAwesomeIcon icon="fa-solid fa-greater-than" /></button>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default UserList;
