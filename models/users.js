var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var nameSchema = new mongoose.Schema({
	username: { type: String, required: true, index: { unique: true } },
	password: { type: String, required: true }
});

// Return model
module.exports = restful.model('users', nameSchema);
