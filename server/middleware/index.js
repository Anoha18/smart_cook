const bodyParser = require('body-parser')
const cors = require('cors');

const graphql = require('./graphql')
const auth = require('./auth')
const api = require('./api')

const corsOptions = {
  origin: 'http://localhost:8081',
  optionsSuccessStatus: 200
}

const {loadBrowser} = require('../scraper');

module.exports = async (app) => {
  // await loadBrowser('https://1000.menu/cooking/search?ms=1&str=&es_tf=&es_tt=14&es_cf=&es_ct=2000', {ingredients: ['Молоко', 'Яйцо', 'Мука']});
  app.use(cors(corsOptions));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use('/api', api);
  auth(app);
  graphql(app);
}