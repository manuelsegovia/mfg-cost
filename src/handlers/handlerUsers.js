const Boom = require('@hapi/boom');
const {
  getAllDocuments,
  saveDocument,
  getDocument,
} = require('../database/crudFunctions');
const { encriptedPwd } = require('../helpers/pwdFunctions');

const DB_COL = 'users';

const getAllUsers = async (request, h) => {
  try {
    const users = await getAllDocuments(request, DB_COL);
    // console.log(typeof users);
    // console.log(users);
    const listUsers = users.map((item) => {
      const container = {};
      container.userId = item.userId;
      container.tipo = item.tipoUsuario;
      return container;
    });
    const res = { data: listUsers };
    return h.response(res).code(200);
  } catch (error) {
    return h.response({ message: 'sepa la madre' });
  }
};

const getUser = async (request, h) => {
  console.log(request.params);
  const userId = { ...request.params };
  const user = await getDocument(request, DB_COL, userId);
  if (!user) {
    throw Boom.notFound('user not registered');
  }
  return h.response({ userId: user.userId, tipo: user.tipoUsuario }).code(200);
};

const addUser = async (request, h) => {
  const user = { ...request.payload };
  console.log(user);
  user.password = await encriptedPwd(user.password);
  console.log(user);
  try {
    const savedUser = await saveDocument(request, DB_COL, user);
    return h.response(savedUser.ops[0]).code(201);
  } catch (error) {
    // return h.response({ error: 'duplicated user id' }).code(409);
    throw error.code === 11000
      ? Boom.badRequest('duplicated user id')
      : Boom.badImplementation('Implementation error');
  }
};

module.exports = {
  getAllUsers,
  addUser,
  getUser,
};
