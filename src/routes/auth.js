const { getDocument } = require('../database/crudFunctions');
const { addUser } = require('../handlers/handlerUsers');
const { unHashPwd } = require('../helpers/pwdFunctions');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) =>
      // h.response({ message: 'enter valid login credentials'
      h.view('index'),
    options: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/login',
    handler: (request, h) => h.view('login'), // h.response({ message: 'enter valid credentials' }),
    options: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/register',
    handler: addUser,
    options: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: async (request, h) => {
      const { userId, password } = request.payload;
      console.log(userId, password);
      const account = await getDocument(request, 'users', { userId });
      console.log(account);

      if (!account || !(await unHashPwd(password, account.password))) {
        return h.response({ message: 'invalid credentials' });
      }
      console.log(await unHashPwd(password, account.password));
      console.log(account);

      request.cookieAuth.set({ id: account.userId });

      return h.response({ message: 'success login' });
    },
    options: {
      auth: {
        mode: 'try',
      },
    },
  },
  {
    method: 'GET',
    path: '/logout',
    handler: (request, h) => {
      request.cookieAuth.clear();
      return h.response({ message: 'logout succesfull' });
    },
  },
];
