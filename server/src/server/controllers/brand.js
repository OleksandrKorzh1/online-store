const {Brand, Type} = require("../../db/models/models");
const ApiError = require("../../utils/apiErrors");

async function createBrand(req, res) {
    const {name} = req.body;
    const brand = await Brand.create({name})
    return res.json(brand)
}

async function getAllBrands(req, res) {
    const brand = await Brand.findAll();
    return res.json(brand)
}

async function deleteBrand(req, res,next) {
    const {id} = req.params;
    const candidate = await Brand.findOne({where: {id}})
    if (!candidate) {
        return next(ApiError.badRequest("Brand not found"))
    }
    await Brand.destroy({where: {id}});
    return res.json({message:"Brand is deleted"})
}

async function updateBrand(req, res, next) {
    const {id} = req.params;
    const brand = await Brand.findOne({where: {id}})
    if (!brand) {
        return next(ApiError.badRequest("Brand not found"))
    }
    brand.set({
        name:req.body.name
    })
    await brand.save()
    return res.json(brand)
}

module.exports = {
    createBrand,
    getAllBrands,
    updateBrand,
    deleteBrand
}