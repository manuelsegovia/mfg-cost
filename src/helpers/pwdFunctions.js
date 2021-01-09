const Bcrypt = require('bcrypt');

const saltRounds = 10;

const encriptedPwd = async (clave) => Bcrypt.hash(clave, saltRounds);

// encriptedPwd('secret').then((result)=>console.log(result));
const unHashPwd = (tryPassword, hashedPasswordOnRecord) =>
  Bcrypt.compare(tryPassword, hashedPasswordOnRecord);

module.exports = {
  encriptedPwd,
  unHashPwd,
};
