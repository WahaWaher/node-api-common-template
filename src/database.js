// Libs
const mongoose = require('mongoose');
// Config
const {
  db_host,
  db_port,
  db_name,
  db_user,
  db_pass,
  db_auth,
} = require('./utils/get-config').database;

const connect = () => {
  return mongoose.connect(
    `mongodb://${db_user}:${db_pass}@${db_host}:${db_port}/${db_name}?&authSource=${db_auth}`,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
  );
};

module.exports = {
  connect,
};
