// MYSQL
var mysql = require('mysql'),
	pool;

module.exports = {

	pool: function() {
		pool = mysql.createPool({
			host: 'localhost',
			user: 'root',
			password: 'password',
			database: 'api'
		});
		return pool;
	}

};
