const {
  getAllDocuments,
  saveDocument,
} = require('../../src/database/crudFunctions');
const { encriptedPwd } = require('../../src/helpers/pwdFunctions');

const DB_COL = 'users';

const usersList = async (request, h) => {
  try {
    const users = await getAllDocuments(request, DB_COL);
    const listUsers = users.map((item) => {
      const container = {};
      container.userId = item.userId;
      container.tipo = item.tipoUsuario;
      return container;
    });
    console.log(listUsers);
    return h.view('users', { users: listUsers });
  } catch (error) {
    return h.view('users', { message: 'valiendo...' });
  }
};
const registerUSer = async (request, h) => {
  const user = { ...request.payload };
  user.tipoUsuario = 'veTuAsaber';
  console.log(user);
  user.password = await encriptedPwd(user.password);
  console.log(user);
  try {
    const savedUser = await saveDocument(request, DB_COL, user);
    request.cookieAuth.set({ id: `${savedUser.ops[0].userId}` });
    return h.view('index', {
      message: `registrado ${savedUser.ops[0].userId}`,
    });
  } catch (error) {
    return error.code === 11000
      ? h.view('register', { message: `${error.details[0].message}` })
      : h.view('index', { message: 'Implementation error' });
  }
};

module.exports = {
  usersList,
  registerUSer,
};

// try {
//   usersList()
// } catch (ex) {
//   console.log(ex)
// }
