const express = require('express');
const controllers=require("../controllers");
const {checkRole} = require("../middlewares");
const authMiddle=require('../middlewares').auth
const joiValidator = require('../../validators/expressValidator');
const schemas = require('../../validators/schemas');
const {idSchema} = require("../../validators/schemas");

const user = express.Router();
user.post('/registration',joiValidator(schemas.schemaRegistry,'body'),controllers.registration)
user.post('/login',joiValidator(schemas.schemaLogin,'body'),controllers.login)
user.get('/auth',authMiddle,controllers.check)
user.post('update/:id',authMiddle,checkRole("ADMIN"),joiValidator(schemas.schemaRegistry,'body'),
    joiValidator(schemas.idSchema,'params'),controllers.updateUserRole)
user.delete('delete/:id',authMiddle,checkRole("ADMIN"),joiValidator(idSchema,'params'),controllers.deleteUser)
module.exports=user;