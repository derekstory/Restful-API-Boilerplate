var mysql = require('../db'),
	pool = mysql.pool();

module.exports = {

	sessionCheck: function(req, res) {
		var isLoggedIn = req.session.user ? true : false;
		res.send({ isLoggedIn: isLoggedIn });
	},

	login: function(req, res) {
		var username = req.body.username,
			password = req.body.password;

		pool.getConnection(function(err, connection) {
			connection.query("SELECT username FROM users WHERE username = '" + username + "' AND password = '" + password + "'", function(err, user, test) {
				connection.release();
				if(err) {
					console.log('Error: ' + err);
					return;
				}

				if(!user.length) {
					console.log('Error logging in.');
					return;
				}

				req.session.user = user;
				res.send({ isLoggedIn: true, test: test });
			});
		});
	}
};
