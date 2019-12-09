/**
 * Object with all errors responses
 */
module.exports = {
  '400001': {
    code: 400001,
    status: 404,
    message: {
      en: 'Route not found',
    },
  },
  '500000': {
    code: 500000,
    status: 500,
    message: {
      en: 'Internal Server Error',
    },
  },
  '500001': {
    code: 500001,
    status: 500,
    message: {
      en: 'Internal Server Error. The error code used is not registered',
    },
  },
};
