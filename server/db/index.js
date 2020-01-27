const {Connection, createConnection} = require('typeorm');
const connectionConfig = '../connection_config.js'

const connect = await createConnection(connectionConfig);

module.exports = connect;