const bodyParser = require('body-parser')
// const graphql = require('./graphql')
const auth = require('./auth')
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}

const {loadBrowser} = require('../scraper');

module.exports = async (app) => {
  await loadBrowser('https://1000.menu/cooking/search?ms=1&str=&es_tf=&es_tt=14&es_cf=&es_ct=2000', {ingredients: ['Молоко', 'Яйцо', 'Мука']});
  // await app.use(cors(corsOptions));
  // await app.use(bodyParser.urlencoded({ extended: false }))
  // await app.use(bodyParser.json());
  // auth(app);
  // graphql(app);
}