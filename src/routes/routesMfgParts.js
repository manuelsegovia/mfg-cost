const { getAllMfgParts, getPart, addPart } = require('../handlers/handlerMfg');

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/mfg',
    handler: getAllMfgParts,
  },
  {
    method: 'GET',
    path: '/api/v1/mfg/{partNumber}',
    handler: getPart,
  },
  {
    method: 'POST',
    path: '/api/v1/mfg',
    handler: addPart,
  },
];
