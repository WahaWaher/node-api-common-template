const { errorResponses } = require('../responses');
const config = require('../utils/get-config');

const { disable: disabledProps } = config.api.response.error;

module.exports = (err, req, res, next) => {
  // Language for response message field (optional)
  let lang = 'en';
  let body = {};

  let { code, message, status, data, errors, stack } = err;

  if (code) {
    if (errorResponses[code]) {
      code = errorResponses[code].code;
      message = errorResponses[code].message[lang];
      status = errorResponses[code].status;
    } else {
      // If error code not registered
      code = errorResponses['500001'].code;
      message = errorResponses['500001'].message[lang];
      status = errorResponses['500001'].status;
    }
  }

  // Defaults response object
  if (!message || !status) {
    code = errorResponses['500000'].code;
    message = errorResponses['500000'].message[lang];
    status = errorResponses['500000'].status;
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
