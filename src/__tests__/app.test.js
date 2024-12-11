const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const User = require('../models/userModel');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Testando as Rotas de Usuário', () => {
  test('POST /api/users - Deve criar um novo usuário', async () => {
    const response = await request(app).post('/api/users').send({
      name: 'John Doe',
      email: 'john@example.com',
      age: 30,
    });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('John Doe');
  });

  test('GET /api/users - Deve listar todos os usuários', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /api/users/:id - Deve retornar um usuário específico', async () => {
    const user = await User.create({ name: 'Jane Doe', email: 'jane@example.com', age: 25 });

    const response = await request(app).get(`/api/users/${user._id}`);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Jane Doe');
  });
});
