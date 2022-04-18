const errorHandler = require('./errorHandler');
const auth = require('./auth');
const checkRole=require("./checkRole")
module.exports = {
  errorHandler,
  auth,
  checkRole
};
