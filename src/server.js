const Path = require('path');
const Hapi = require('@hapi/hapi');

const server = Hapi.server({
  port: process.env.PORT || 4500,
  host: '0.0.0.0',
  routes: {
    files: {
      relativeTo: Path.resolve('client', 'public'),
    },
    cors: true,
  },
});

module.exports = {
  server,
};
