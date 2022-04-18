const users=require('./user');
const type=require('./type');
const device=require('./device');
const brand=require('./brand');


module.exports={
    ...users,
    ...type,
    ...device,
    ...brand
}