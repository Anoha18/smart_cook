const {createConnection} = require('typeorm');
const connectionConfig = '../connection_config.js'
const entities = require('../graphQL/models/');

const connect = createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'anoha',
  password: '0000',
  database: 'smart_cook',
  entities,
  logging: false
});

module.exports = connect;