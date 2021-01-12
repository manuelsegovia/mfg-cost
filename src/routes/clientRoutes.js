module.exports = [
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
      },
    },
    options: {
      auth: false,
    },
  },
];
