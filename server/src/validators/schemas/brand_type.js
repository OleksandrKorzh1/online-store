const Joi = require("joi");
const schemaBrand_type = Joi.object({
    name: Joi.string().max(128).required(),
});
module.exports={
    schemaBrand_type
}