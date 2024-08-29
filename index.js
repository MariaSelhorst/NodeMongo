const express = require('express');
const router = require('./routes');
const app = express();

const cors = require('cors');

app.use(cors({
    origin: '*'
}));

require('./startup/db')();

const port = 8080;

router(app);

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;