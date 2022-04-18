const configDb = require('../config').db;
const {Sequelize} = require("sequelize");
module.exports = new Sequelize(
    configDb.database,
    configDb.user,
    configDb.password,
    {
      dialect:"postgres",
      host:configDb.host,
      port:configDb.port
    }
)
