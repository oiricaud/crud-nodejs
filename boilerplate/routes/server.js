const express = require("express");
const app = express();
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

const swaggerUi = require('swagger-ui-express'), swaggerDocument = require('../swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
