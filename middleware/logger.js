const moment = require('moment');

const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
  console.log(`${req.protocol}`);
  console.log(`${req.get('host')}`);
  console.log(`${req.originalUrl}`);
  next();
};

module.exports = logger;