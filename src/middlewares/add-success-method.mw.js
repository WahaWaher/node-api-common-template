const { successResponses } = require('../responses');
const extend = require('node.extend');
const config = require('../utils/get-config');

const { disable: disabledProps } = config.api.response.success;

let defaults = {
  code: undefined,
  message: 'Operation completed successfully',
  status: 200,
  data: undefined,
  warnings: undefined,
};

module.exports = (req, res, next) => {
  res.success = function() {
    let [first, second] = arguments;
    let lang = 'en';
    let regResp = {},
      argResp = {},
      body = {};

    // First arg - success code, second - body object
    if (typeof first === 'string' || typeof first === 'number') {
      regResp = successResponses[first];
      argResp = second || {};

      // First arg - object
    } else if (typeof first === 'object' && first !== null) {
      regResp = successResponses[first.code];
      argResp = first || {};
    }

    // If error code not found
    if (!regResp) {
      return res.error(500001);
    }

    body = extend(true, defaults, argResp, regResp, {
      // Modifying response body
      message: regResp.message[lang],
    });

    // Disabling props by config
    disabledProps.forEach(prop => delete body[prop]);

    res.status(body.status).send(body);
  };
  next();
};
