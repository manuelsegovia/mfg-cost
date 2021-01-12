const auth = require('./auth');
const clientRoutes = require('./clientRoutes');
const routesMfgParts = require('./routesMfgParts');
const routesUsers = require('./routesUsers');
const client = require('../../client/routes/clientUsersRoutes');

module.exports = [
  ...routesMfgParts,
  ...routesUsers,
  ...auth,
  ...clientRoutes,
  ...client,
];
