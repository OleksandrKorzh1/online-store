const {port} = require('../config');
const app = require('./routes');
const sequelize=require('../db')
const models=require('../db/models/models.js')

let listener;

const start = async () => {
  await sequelize.authenticate()
  await sequelize.sync()
  listener = app.listen(port, () => {
    console.log(`Server successfully started on port ${port}`);
  });
};

function stop(callback) {
  if (!listener) {
    callback();
    return;
  }
  listener.close((err) => {
    if (err) {
      console.log(err, 'Failed to close the server');
      callback();
      return;
    }
    console.log('Server has been stopped');
    callback();
  });
}

module.exports = {start, stop};
