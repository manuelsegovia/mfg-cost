const auth = require('./auth');
const routesMfgParts = require('./routesMfgParts');
const routesUsers = require('./routesUsers');

module.exports = [
  // {
  //   method: 'GET',
  //   path: '/',
  //   handler: (request, h) => h.response({ message: 'THIS IS / HOME' }),
  // },
  ...routesMfgParts,
  ...routesUsers,
  ...auth,
];
