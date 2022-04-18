const Joi = require("joi");
const schemaDevice = Joi.object({
    name: Joi.string().max(128).required(),
    price: Joi.number().min(0).required().positive(),
    rating: Joi.number().min(0).positive(),
   // img: Joi.any().required(),
    brandId: Joi.number().min(0).required().positive(),
    typeId: Joi.number().min(0).required().positive(),
    info: Joi.string().min(1).required()
});

module.exports = {
    schemaDevice,
}