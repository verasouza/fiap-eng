import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser, createUser, updateUser } from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserXmark, faUserPen, faUser } from '@fortawesome/free-solid-svg-icons';
import Popup from '../components/Popup';
import UserForm from '../components/UserForm';
import Pagination from '../components/Pagination';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const [buttonPopup, setPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
  };

  const handleCreateUser = async (userData) => {
    try {
      await createUser(userData);
      const {data} = await getUsers();
      setUsers(data);
      setPopup(false);
      alert('Usuário criado com sucesso!');
     
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('Erro 400: Dados inválidos. Por favor, revise as informações enviadas: ' + JSON.stringify(error.response));
      } else {
        console.error('Erro inesperado:', error);
        alert('Ocorreu um erro inesperado. Tente novamente mais tarde.');
      }
    }
  }

  const handleEditUser = async (updatedUser) => {
    try {
      await updateUser(updatedUser._id, updatedUser); 
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === updatedUser._id ? updatedUser : user
        )
      );
      setPopup(false);
      alert('Usuário atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao editar usuário:', error);
      alert('Erro ao editar usuário. Tente novamente mais tarde.');
    }
  };
  

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentUsers = users.slice(firstPostIndex, lastPostIndex);

  return (
    <div className={'outer'}>
      <h2>Lista de Usuários</h2>
      <div className={'inner'}>
        <hr></hr>
        <table>
          <tbody>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
          {currentUsers.map((user) => (
            <tr key={user._id}>
              <td className={"id"}>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className={"actions"}>
                <button className='remove' onClick={() => handleDelete(user._id)}><FontAwesomeIcon icon={faUserXmark} /><span>Excluir</span></button>
                <button className='edit' onClick={() =>{setSelectedUser(user);  setPopup(true);}}><FontAwesomeIcon icon={faUserPen} /><span>Editar</span></button>
              </td>
            </tr>
          ))}
          <tr className={"controls"}>
            <div>
              <button className='create' onClick={() => {setSelectedUser(null);  setPopup(true);}}><FontAwesomeIcon icon={faUserPlus} /><span>Criar</span></button>
            </div>
            <div className={"pagination"}>
              <Pagination 
                totalPosts={users.length} 
                postsPerPage={postsPerPage} 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </tr>
          </tbody>
        </table>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setPopup}>
        <UserForm user={selectedUser} onSubmit={selectedUser ? handleEditUser : handleCreateUser}/>
      </Popup>
    </div>
  );
};

export default UserList;
