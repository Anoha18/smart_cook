const bodyParser = require('body-parser')
const graphql = require('./graphql')
const auth = require('./auth')

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json());
  auth(app);
  graphql(app);
}