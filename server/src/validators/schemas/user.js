const Joi = require('joi');

const schemaLogin = Joi.object({
  email: Joi.string().email().lowercase().max(128).required(),
  password: Joi.string().min(8).max(32).required(),
});
const schemaRegistry = Joi.object({
  email:Joi.string().email().lowercase().max(128).required(),
  password: Joi.string().min(8).max(32).required(),
  role:Joi.string().valid("ADMIN","USER")
})
const idSchema = Joi.object({
  id: Joi.number().min(1).positive(),
});

module.exports = {
  schemaLogin,
  schemaRegistry,
  idSchema
};

