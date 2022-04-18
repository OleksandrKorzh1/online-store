const express = require('express');
const device = express.Router();
const controllers=require('../controllers')
const {checkRole} = require("../middlewares");
const joiValidator = require("../../validators/expressValidator");
const schemas = require("../../validators/schemas");
device.post('/create',
    checkRole("ADMIN"),
    joiValidator(schemas.schemaDevice,'body'),
    controllers.createDevice)
device.get('/',joiValidator(schemas.idSchema,'params'),controllers.getAllDevices)
device.get('/:id',joiValidator(schemas.idSchema,'params'),controllers.getOneDevice)
device.delete('/delete/:id',joiValidator(schemas.idSchema,'params'),controllers.deleteDevice);
device.post('/update/:id',joiValidator(schemas.idSchema,'params'),controllers.updateDevice);
module.exports=device;