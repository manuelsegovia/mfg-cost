const { server } = require('./server');
const authOptions = require('./options/authOptions');

const allPlugins = require('./plugins/allPlugins');
const allRoutes = require('./routes/allRoutes');
const viewOptions = require('../client/options/viewOptions');

const init = async () => {
  await server.register(allPlugins);
  server.views(viewOptions);
  server.auth.strategy('session', 'cookie', authOptions);
  server.auth.default('session');
  server.route(
    allRoutes // {
    //   options: {
    //     cors: true,
    //     // credentials: true,
    //     // origin: '*',
    //   },
    // }
  );
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
