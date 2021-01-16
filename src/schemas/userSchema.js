const Joi = require('joi');

const userSchema = Joi.object().keys({
  userId: Joi.string().min(6).max(20).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().email().min(6).required(),
});

module.exports = {
  userSchema,
};
