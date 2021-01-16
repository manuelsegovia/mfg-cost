const { unHashPwd } = require('../helpers/pwdFunctions');
const { getDocument } = require('../database/crudFunctions');

const loginHandler = async (request, h) => {
  const { userId, password } = request.payload;
  console.log(userId, password);
  const account = await getDocument(request, 'users', { userId });
  console.log(account);

  if (!account || !(await unHashPwd(password, account.password))) {
    return h.view('login', { message: 'invalid credentials' });
  }
  console.log(await unHashPwd(password, account.password));
  console.log(account);

  request.cookieAuth.set({ id: account.userId });

  return h.view('index', { message: `${account.userId} esta autorizado` });
};

module.exports = {
  loginHandler,
};
