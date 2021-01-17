const { unHashPwd } = require('../helpers/pwdFunctions');
const { getDocument } = require('../database/crudFunctions');

const loginHandler = async (request, h) => {
  const { userId, password } = request.payload;
  const account = await getDocument(request, 'users', { userId });

  if (!account || !(await unHashPwd(password, account.password))) {
    const errors = [{ message: 'invalid credentials' }];
    return h.view('login', { errors });
  }

  request.cookieAuth.set({ id: account.userId });

  return h.view('index', { message: `${account.userId} esta autorizado` });
};

module.exports = {
  loginHandler,
};
