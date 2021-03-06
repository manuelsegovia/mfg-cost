const { getDocument } = require('../database/crudFunctions');

module.exports = {
  cookie: {
    name: 'sid-example',
    password: '!wsYhFA*C2U6nz=Bu^%A@^F#SF3&kSR6',
    isSecure: true,
  },
  redirectTo: '/login',
  validateFunc: async (request, session) => {
    const account = await getDocument(request, 'users', {
      userId: session.id,
    });
    if (!account) {
      return { valid: false };
    }
    return { valid: true, credentials: account };
  },
};
