// Dependencies
var express = require('express');
var restful = require('node-restful');
var mongoose = restful.mongoose;

var app = express();

// Schema
var productSchema = new mongoose.Schema({
    name: String,
    sku: String,
    price: Number
});

// Return model
module.exports = restful.model('TestModel', productSchema);
