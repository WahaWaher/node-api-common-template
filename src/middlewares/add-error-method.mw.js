const HttpError = require('../utils/http-error');

module.exports = (req, res, next) => {
  res.error = function() {
    let [first, second] = arguments;
    let data = {};

    if (typeof first === 'string' || typeof first === 'number') {
      data = {
        ...(second || {}),
        code: first,
      };
    } else if (typeof first === 'object' && first !== null) {
      data = { ...first };
    }

    next(new HttpError(data));
  };
  next();
};
