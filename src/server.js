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
    // validate: {
    //   options: {
    //     abortEarly: false,
    //   },
    //   failAction: async (request, h, error) =>
    //     error.isJoi
    //       ? h.response(error.details).takeover()
    //       : h.response(error).takeover(),
    // },
  },
});

module.exports = {
  server,
};
