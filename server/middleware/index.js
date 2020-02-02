const bodyParser = require('body-parser')
const graphql = require('./graphql')
const auth = require('./auth')
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}

module.exports = (app) => {
    app.use(cors(corsOptions));
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json());
    auth(app);
    graphql(app);
}