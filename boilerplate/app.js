'use strict';

const express = require('express');
const employeeRoutes = require('./routes/employee');
const app = express();
const port = parseInt(process.env.PORT || '3000');
const swaggerUi = require('swagger-ui-express'), swaggerDocument = require('./swagger.json');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/employees', employeeRoutes);

// Fail over route
app.use(function(req, res) {
    res.status(404).send('Not found');
});

// listen for requests
app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;
