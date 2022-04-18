const {Type } = require('../../db/models/models')
const ApiError = require('../../utils/apiErrors')

async function createType(req, res) {
    const {name} = req.body;
    const type = await Type.create({name})
    return res.json(type)
}

async function getAllTypes(req, res) {
        const types= await Type.findAll();
        return res.json(types)
}
async function deleteType(req, res,next) {
    const {id} = req.params;
    const candidate = await Type.findOne({where: {id}})
    if (!candidate) {
        return next(ApiError.badRequest("Brand not found"))
    }
    await Type.destroy({where: {id}});
    return res.json({message:"Successfully deleted"})
}

async function updateType(req, res, next) {
    const {id} = req.params;
    const type = await Type.findOne({where: {id}})
    if (!type) {
        return next(ApiError.badRequest("Brand not found"))
    }
    type.set({
        name:req.body.name
    })
    await type.save()
    return res.json(type)
}


module.exports = {
    createType,
    getAllTypes,
    updateType,
    deleteType
}