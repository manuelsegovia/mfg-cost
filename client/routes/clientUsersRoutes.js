const { usersList } = require('../handlers/clientUsersHandler');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: usersList,
  },
];
