var mysql = require('../db'),
	pool = mysql.pool();

module.exports = {

	getTestItem: function(req, res) {
		pool.getConnection(function(err, connection) {
			pool.query('SELECT * FROM testmodel WHERE id= ?', [req.query.id],function(err, rows) {
				if(err) {
					console.log('Error: ' + err);
				} else {
					res.send(rows);
				}
			});
		});
	}
};
