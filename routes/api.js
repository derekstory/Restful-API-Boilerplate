var express = require('express');
var request = require('request');
var router  = express.Router();

// Models
var TestModel = require('../models/test-model');
var Users = require('../models/users');

// Routes
TestModel.methods(['get', 'put', 'post', 'delete']);
TestModel.register(router, '/test-model');

Users.methods(['get', 'put', 'post', 'delete']);
Users.register(router, '/users');

module.exports = router;
