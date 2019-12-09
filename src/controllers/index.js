// Controllers: main
const getApiInfo = require('./main/get-api-info.ctrl');
// Controllers: users
const login = require('./users/login.ctrl');
const registration = require('./users/registration.ctrl');
// Controllers: products
const getProfile = require('./account/get-profile.ctrl');

module.exports = {
  main: {
    getApiInfo,
  },
  users: {
    login,
    registration,
  },
  account: {
    getProfile,
  },
};
