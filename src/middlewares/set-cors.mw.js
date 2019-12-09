const config = require('../../config');

module.exports = (req, res, next) => {
  let origin = req.get('origin');
  let domain = origin ? origin.split('//')[1] : false;
  let origins = config.server.origins;

  if (origin && origins.includes(domain)) {
    res.set({
      'Access-Control-Allow-Origin': `${req.protocol}://${domain}`,
    });
  }

  res.set({
    'Access-Control-Expose-Headers': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'Origin,X-Requested-With,Content-Type,Accept,Cookie,Set-Cookie,Content-Length',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
  });

  next();
};
