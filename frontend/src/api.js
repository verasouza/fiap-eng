import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8089/api', // URL do backend
});

export const getUsers = () => API.get('/users');
export const getUserById = (id) => API.get(`/users/${id}`);
export const createUser = (userData) => API.post('/users', userData);
export const updateUser = (id, userData) => API.put(`/users/${id}`, userData);
export const deleteUser = (id) => API.delete(`/users/${id}`);

export default API;