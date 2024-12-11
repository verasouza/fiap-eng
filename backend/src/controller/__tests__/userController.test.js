const { createUser, getAllUsers } = require('../userController');
const User = require('../../models/userModel');

jest.mock('../../models/userModel'); // Mock do modelo

describe('User Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Deve criar um novo usuário', async () => {
    const req = { body: { name: 'John Doe', email: 'john@example.com', age: 30 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    User.prototype.save = jest.fn().mockResolvedValue(req.body);

    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });

  test('Deve retornar todos os usuários', async () => {
    const users = [{ name: 'Jane Doe', email: 'jane@example.com', age: 25 }];
    User.find = jest.fn().mockResolvedValue(users);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getAllUsers(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(users);
  });
});
