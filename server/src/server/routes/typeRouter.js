const express = require('express');
const type = express.Router();
const controllers=require('../controllers')
const joiValidator = require("../../validators/expressValidator");
const schemas = require("../../validators/schemas");
const checkRole=require("../middlewares").checkRole

type.post('/create',checkRole("ADMIN"),joiValidator(schemas.schemaBrand_type,'body'),controllers.createType)
type.get('/',controllers.getAllTypes)
type.delete('/delete/:id',checkRole("ADMIN"),joiValidator(schemas.idSchema,'params'),controllers.deleteType)
type.post('update/:id',checkRole("ADMIN"),joiValidator(schemas.idSchema,'params'),controllers.updateType)

module.exports=type;