const {Device, DeviceInfo} = require("../../db/models/models");
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../../utils/apiErrors')

async function createDevice(req, res, next) {
    try {
        let {name, price, brandId, typeId, info} = req.body;

        const {img} = req.files;
        let fileName = uuid.v4() + '.jpg'
        await img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const device = await Device.create({name, price, brandId, typeId, img: fileName})
        if (info) {
            info = JSON.parse(info);
            info.forEach(i =>
                DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id
                }))
        }
        return res.json(device)
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
}

async function getAllDevices(req, res) {
    try {


        let {brandId, typeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId,}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }
    catch (e) {
        console.log(e);
    }
}

async function getOneDevice(req, res,next) {
    const {id} = req.params;

    const device = await Device.findOne(
        {
            where: {id},
            include:[{model:DeviceInfo,as:'info'}]
        })
    if (!device) {
        return next(ApiError.badRequest("Device not found"))
    }
    return res.json(device)
}

async function deleteDevice(req,res,next){
    const {id} = req.params;
    const device= await Device.findOne({where:{id}});
    if (!device) {
        return next(ApiError.badRequest("Device not found"))
    }else {
        await Device.destroy({where:{id}});
        return res.json({message:"Device is deleted"})
    }

}
async function updateDevice(req,res,next){
    const {id} = req.params;
    const {name,price,brandId,typeId}=req.body
    const device= await Device.findOne({where:{id}});
    if (!device) {
        return next(ApiError.badRequest("Device not found"))
    }else {
        await device.set({
            name:name,
            price:price,
            brandId:brandId,
            typeId:typeId,
        });
        await device.save();
        return res.json(device)
    }

}
module.exports = {
    createDevice,
    getAllDevices,
    getOneDevice,
    updateDevice,
    deleteDevice
}