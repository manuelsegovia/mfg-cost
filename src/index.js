// const Boom = require('@hapi/boom');
const { server } = require('./server');
const authOptions = require('./options/authOptions');

const allPlugins = require('./plugins/allPlugins');
const allRoutes = require('./routes/allRoutes');
const viewOptions = require('../client/options/viewOptions');
const { errorHandler } = require('./helpers/errorHandling');

const init = async () => {
  await server.register(allPlugins);
  server.views(viewOptions);
  server.auth.strategy('session', 'cookie', authOptions);
  server.auth.default('session');
  server.ext('onPreResponse', errorHandler);

  server.route(allRoutes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
