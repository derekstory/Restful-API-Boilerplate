var Backbone = require('backbone'),
	_ = require('lodash'),
	$ = require('jquery'),
	template = require('./navbar.handlebars');

var Login = Backbone.Model.extend({
	urlRoot: '/api/login'
});

var Logout = Backbone.Model.extend({
	urlRoot: '/api/logout'
});

var AppView = Backbone.View.extend({

	initialize: function(options) {
		this.options = options;
		this.navbar = $('.navbar');
		this.render();
	},

	render: function(){
		this.navbar.empty().append(template(this.options));
		this.navbar.find('button').on('click', this.login.bind(this));
		this.navbar.find('.logout').on('click', this.logout.bind(this));

		// Listen for when a new section is rendered. The nav may need to change options
		Backbone.Events.on("newSection", this.newSection.bind(this));

		return this;
	},

	newSection: function(section) {
		// Highlight nav option of current section
		this.navbar.find('[data-href]').removeClass('is-selected');
		this.navbar.find('[data-section=' + section + ']').addClass('is-selected');
	},

	login: function() {
		var username = this.navbar.find('input[type="text"]').val(),
			password = this.navbar.find('input[type="password"]').val();
			newUser  = new Login({ "username": username, "password": password });

		if(username && password) {
			newUser.save(null , {
				success: function (req, res) {
					console.log(req);
				}
			});
		}
	},

	logout: function() {
		var logout = new Logout();
		logout.save(null, {
			success: function(req, res) {
				console.log('logged out');
			}
		});
	}

});

module.exports = AppView;
