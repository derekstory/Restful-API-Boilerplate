var Backbone = require('backbone'),
	_ = require('lodash'),
	$ = require('jquery'),
	template = require('./navbar.handlebars');

var Users = Backbone.Model.extend({
	urlRoot: '/api/users'
});

var AppView = Backbone.View.extend({

	initialize: function(options) {
		this.options = options;
		this.navbar = $('.navbar');
		this.render();
	},

	render: function(){
		this.navbar.empty().append(template());
		this.navbar.find('button').on('click', this.signup.bind(this));

		// Listen for when a new section is rendered. The nav may need to change options
		Backbone.Events.on("newSection", this.newSection.bind(this));

		return this;
	},

	newSection: function(section) {
		// Highlight nav option of current section
		this.navbar.find('[data-href]').removeClass('is-selected');
		this.navbar.find('[data-section=' + section + ']').addClass('is-selected');
	},

	signup: function() {
		var username = this.navbar.find('input[type="text"]').val(),
			password = this.navbar.find('input[type="password"]').val();
			newUser  = new Users({ "username": username, "password": password });

		if(username && password) {
			newUser.save(null , {
				success: function (newModel) {
					console.log('New user created.');
				}
			});
		}
	}

});

module.exports = AppView;
