const errRespData = require('../responses/error-responses');
const config = require('../utils/get-config');

const { disable: disabledProps } = config.api.response.error;

module.exports = (err, req, res, next) => {
  // Language for response message field (optional)
  let lang = 'en';
  let body = {};

  let { code, message, status, data, errors, stack } = err;

  if (code) {
    if (errRespData[code]) {
      code = errRespData[code].code;
      message = errRespData[code].message[lang];
      status = errRespData[code].status;
    } else {
      // If error code not registered
      code = errRespData['500001'].code;
      message = errRespData['500001'].message[lang];
      status = errRespData['500001'].status;
    }
  }

  // Defaults response object
  if (!message || !status) {
    code = errRespData['500000'].code;
    message = errRespData['500000'].message[lang];
    status = errRespData['500000'].status;
  }

  body = {
    // Main props for response object
    code, message,
    // Payload optional props (disabled by default)
    data, errors,
    // Debug optional props (disable/enable in cinfig file)
    status, stack,
  };

  // Disabling props by config
  disabledProps.forEach(prop => delete body[prop]);

  res.status(status).send(body);
};
