const express = require('express');
require('reflect-metadata');
const db = require('./db');

const PORT = 3000;
const HOST = '0.0.0.0'

const app = express();

db.then(connect => {
  const server = app.listen(PORT, () => {
    console.info(`Server starting on http://localhost:${PORT}`);
  })
}).catch(error => {
  console.error(error);
})

require('./middleware')(app);
