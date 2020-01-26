const jwt = require('jsonwebtoken');

module.exports = (app) => {
  app.use((req, res, next) => {
    console.log('this middleware');
    next();
  })
};
