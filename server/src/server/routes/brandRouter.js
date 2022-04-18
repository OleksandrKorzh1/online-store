const express = require('express');
const brand = express.Router();
const controllers=require("../controllers")
const {checkRole} = require("../middlewares");
const joiValidator = require("../../validators/expressValidator");
const {schemaBrand_type, idSchema} = require("../../validators/schemas");
brand.post('/create',checkRole("ADMIN"),joiValidator(schemaBrand_type),controllers.createBrand)
brand.get('/',controllers.getAllBrands)
brand.delete('/delete/:id',checkRole("ADMIN"),joiValidator(idSchema),controllers.deleteBrand)
brand.post('/update/:id',checkRole("ADMIN"),joiValidator(idSchema),joiValidator(schemaBrand_type),controllers.updateBrand)

module.exports=brand;