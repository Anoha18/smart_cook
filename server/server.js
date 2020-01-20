const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0'

const app = express();

const server = app.listen(PORT, () => {
  console.info(`Server starting on http://localhost:${PORT}`);
})

require('./middleware')(app);
