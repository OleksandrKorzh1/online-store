const auth = require('./user');
const brand = require('./brand_type');
const device = require('./device');

module.exports ={
  ...auth,
  ...brand,
  ...device
};
