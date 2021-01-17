const { loginHandler } = require('../handlers/authHandler');
const { loginSchema } = require('../schemas/userSchema');

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
      validate: {
        options: {
          abortEarly: false,
          allowUnknown: true,
        },
        payload: loginSchema,
        failAction: (request, h, err) => {
          throw err;
        },
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
