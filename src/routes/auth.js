const { getDocument } = require('../database/crudFunctions');
const { addUser } = require('../handlers/handlerUsers');
const { unHashPwd } = require('../helpers/pwdFunctions');
const { loginHandler } = require('../handlers/authHandler');

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
    path: '/login',
    handler: loginHandler,
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
      return h.view('index');
    },
  },
];
