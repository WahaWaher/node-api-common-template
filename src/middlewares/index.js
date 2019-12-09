const setCors = require('./set-cors.mw');
const handleNotFound = require('./handle-not-found.mw');
const handleErrors = require('./handle-errors.mw');
const checkAuth = require('./check-auth.mw');
const addErrorMethod = require('./add-error-method.mw');
const addSuccessMethod = require('./add-success-method.mw');

module.exports = {
  setCors,
  handleNotFound,
  handleErrors,
  checkAuth,
  addSuccessMethod,
  addErrorMethod
};
