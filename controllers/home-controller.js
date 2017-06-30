var mysql = require('../db'),
	pool = mysql.pool();

module.exports = {

	getTestModel: function(req, res){
		pool.getConnection(function(err, connection) {
			connection.query('SELECT * FROM testmodel', function(err, rows) {
				connection.release();
				if(err) {
					console.log('Error: ' + err);
				} else {
					console.log(req.session.user);
					res.send(rows);
				}
			});
		});
	},

	postTestModel: function(req, res) {
		pool.getConnection(function(err, connection) {
			pool.query('INSERT INTO testmodel (name) VALUES ("' + req.body.name + '")', req, function(err, rows) {
				connection.release();
				if(err) {
					console.log('Error: ' + err);
				} else {
					res.send(rows);
				}
			});
		});
	},

	deleteTestModel: function(req, res) {
		pool.getConnection(function(err, connection) {
			pool.query('DELETE FROM testmodel WHERE id= ?', [req.query.id], function(err, rows) {
				if(err) {
					console.log('Error: ' + err);
				} else {
					res.send(rows);
				}
			});
		});
	}

};
