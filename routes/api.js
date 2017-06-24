var app = require('express');
var mysql = require('mysql');

module.exports = function(connection) {
	var router = app.Router();
	var db = connection.db;

	router.get('/testmodel', function(req, res) {
		db.query('SELECT * FROM testmodel', function(err, rows) {
			if(err) {
				console.log('Error: ' + err);
			} else {
				res.send(rows);
			}
		});
	});

	router.get('/testitem', function(req, res) {
		db.query('SELECT * FROM testmodel WHERE id= ?', [req.query.id],function(err, rows) {
			if(err) {
				console.log('Error: ' + err);
			} else {
				res.send(rows);
			}
		});
	});

	router.delete('/testmodel', function(req, res) {
		db.query('DELETE FROM testmodel WHERE id= ?', [req.query.id], function(err, rows) {
			if(err) {
				console.log('Error: ' + err);
			} else {
				res.send(rows);
			}
		});
	});

	router.post('/testmodel', function(req, res) {
		db.query('INSERT INTO testmodel (name) VALUES ("' + req.body.name + '")', req, function(err, rows) {
			if(err) {
				console.log('Error: ' + err);
			} else {
				res.send(rows);
			}
		});
	});

	return router;
};
