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
  // server.ext('onPreResponse', (request, h) => {
  //   const { response } = request;
  //   console.log(response);
  //   console.log(response.isBoom);
  //   if (!response.isBoom) {
  //     console.log('insideIf', response.isBoom);
  //     return h.continue;
  //   }

  //   if (request.route.path === '/register' && request.route.method === 'post') {
  //     console.log(request.route.path, request.route.method);
  //     return h.view('register', { error: 'new registerError' });
  //   }
  //   return h.continue;
  // });
  server.route(allRoutes);

  await server.start();
  console.log(__dirname);
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();

// {
//   options: {
//     cors: true,
//     // credentials: true,
//     // origin: '*',
//   },
// }
