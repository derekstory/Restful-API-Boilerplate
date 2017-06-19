var express = require('express');
var request = require('request');
var router  = express.Router();

// Models
var TestModel = require('../models/test-model');

// Routes
TestModel.methods(['get', 'put', 'post', 'delete']);
TestModel.register(router, '/test-model');

module.exports = router;
