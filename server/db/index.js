const {createConnection} = require('typeorm');
const connectionConfig = '../connection_config.js'
const entities = require('../graphQL/models/');

const connect = createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'xCore',
  password: 'qqq12345',
  database: 'smart_cook',
  entities,
  logging: false
});

module.exports = connect;