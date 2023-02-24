/**
 * API endpoint file
 */

//Requirements
let routes = require('./src/controller/index')
let bodyParser = require('body-parser');
const cors = require('cors')
const express = require('express');

// Instantiation
const app = express();
const options = {
    origin: process.env.NSIKATIA_LEADER_CLIENT_API
}

//Injection of middlewares into Express web application framework
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(options))
app.use('/', routes);

// Define port number application
const PORT = process.env.PORT ||5000;

// Set application server
app.listen(PORT,console.log(
`Server started on port ${PORT}`));