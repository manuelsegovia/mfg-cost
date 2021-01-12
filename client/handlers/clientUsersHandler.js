const { getAllDocuments } = require('../../src/database/crudFunctions');

const DB_COL = 'users';

const usersList = async (request, h) => {
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
    console.log(listUsers);
    return h.view('users', { users: listUsers });
  } catch (error) {
    return h.view('users', { message: 'valiendo...' });
  }
};

module.exports = {
  usersList,
};

// try {
//   usersList()
// } catch (ex) {
//   console.log(ex)
// }
