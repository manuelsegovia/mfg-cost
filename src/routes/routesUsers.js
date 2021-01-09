const { getAllUsers, addUser, getUser } = require('../handlers/handlerUsers');

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/users',
    handler: getAllUsers,
  },
  {
    method: 'GET',
    path: '/api/v1/users/{userId}',
    handler: getUser,
  },
  {
    method: 'POST',
    path: '/api/v1/users',
    handler: addUser,
    options: {
      auth: false,
    },
  },
];
