var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var nameSchema = new mongoose.Schema({
	name: String
});

// Return model
module.exports = restful.model('TestModel', nameSchema);
