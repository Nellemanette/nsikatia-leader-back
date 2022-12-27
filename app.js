let routes = require('./src/controller/index')
var bodyParser = require('body-parser');

// Requiring module
const express = require('express');

// Creating express object
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT,console.log(
`Server started on port ${PORT}`));