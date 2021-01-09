module.exports = [
  {
    plugin: require('hapi-mongodb'),
    options: require('../database/mongoOptions'),
  },
  {
    plugin: require('@hapi/vision'),
  },
  {
    plugin: require('@hapi/cookie'),
  },
];

// {
//   plugin: require('hapi-pino'),
//   options: {
//     prettyPrint: process.env.NODE_ENV !== 'production',
//     logEvents: ['response'],
//   },
// },
