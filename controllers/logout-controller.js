var mysql = require('../db'),
	pool = mysql.pool();

module.exports = {

	logout: function(req, res) {
		req.session.destroy();
	}

};
