const Hapi = require('@hapi/hapi');

const server = Hapi.server({
  port: process.env.PORT || 4500,
  host: '0.0.0.0',
  routes: {
    cors: {
      credentials: true,
    },
  },
});
module.exports = {
  server,
};
