'use strict';

const express = require('express');
const router = express.Router();

const DATABASE = {};

/* GET employees listing. */
router.get('', function(req, res) {
  console.log('GET employees');
  return res.send(DATABASE);
});

/* GET employee by ID. */
router.get('/:id', function(req, res) {
  console.log('GET employee by ID');
  return res.send(DATABASE);
});

/* DELETE employee by ID. */
router.delete('/:id', function(req, res) {
  console.log('DELETE employee by ID');
  return res.send(DATABASE);
});

/* POST add employee and give it a random _id and a _favJoke1 _favJoke2. */
router.post('', function(req, res) {
  console.log('POST add employee');
  return res.send(DATABASE);
});

/* PUT when given employee id replace record. */
router.put('/:id', function(req, res) {
  console.log('PUT employee.js');
  return res.send(DATABASE);
});

module.exports = router;
