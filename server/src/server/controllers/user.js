const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const ApiError = require("../../utils/apiErrors")
const config = require('../../config')
const {User, Basket} = require("../../db/models/models");
const generateJwt = require("../../utils/generateJwt");

async function registration(req, res, next) {
    const {email, password, role} = req.body;
    if (!email || !password) {
        return next(ApiError.badRequest("Wrong email or password"))
    }
    const candidate = await User.findOne({where: {email}})//TODO создать сервис работа с бд там
    if (candidate) {
        return next(ApiError.badRequest("This email is exist"))
    }
    const hashPassword = await bcrypt.hash(password.toString(), 5);
    const user = await User.create({email, role, password: hashPassword})
    const basket = await Basket.create({userId: user.id})
    const token = generateJwt(user)
    //TODO Validation
    return res.json({token})
}

async function login(req, res, next) {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}})//TODO создать сервис работа с бд там
    if (!user) {
        return next(ApiError.badRequest("User not found"))
    }
    let comparePassword = bcrypt.compareSync(password.toString(), user.password);
    if (!comparePassword) {
        return next(ApiError.badRequest("Wrong password"))
    }
    const token = generateJwt(user);
    return res.json({token});
}
async function updateUserRole(req,res,next){
    const {id} = req.params;
    const user = await User.findOne({where: {id}})
    if (!user) {
        return next(ApiError.badRequest("User not found"))
    }
    user.set({
        role:req.body.role
    })
    await user.save();
    return res.json(`User ${user.email} assigned ${user.role}`)
}
async function deleteUser(req,res,next){
    const {id} = req.params;
    const user = await User.findOne({where: {id}})
    if (!user) {
        return next(ApiError.badRequest("User not found"))
    }else {
        await User.destroy(user);
        res.json("User Deleted")
    }
}

async function check(req, res) {
    const token = generateJwt(req.user);
    return res.json({token});
}

module.exports = {
    registration,
    login,
    check,
    deleteUser,
    updateUserRole
}