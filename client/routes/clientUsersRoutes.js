const { usersList, registerUSer } = require('../handlers/clientUsersHandler');
const { userSchema } = require('../../src/schemas/userSchema');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: usersList,
  },
  {
    method: 'GET',
    path: '/register',
    handler: (request, h) => h.view('register'),
    options: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/register',
    handler: registerUSer,
    options: {
      auth: false,
      validate: {
        options: {
          abortEarly: false,
        },
        payload: userSchema,
        failAction: (request, h, err) => {
          throw err;
        },
      },
    },
  },
];
