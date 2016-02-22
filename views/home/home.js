var Backbone = require('backbone');
var _        = require('lodash');
var $        = require('jquery');
var template = require('./home.handlebars');

var TestModel = Backbone.Model.extend({
	urlRoot: '/api/test-model'
});

var TestCollection = Backbone.Collection.extend({
	model: TestModel,
	url: '/api/test-model'
});

var AppView = Backbone.View.extend({

	events: {
		'click button': 'postTest'
	},

	initialize: function(options) {
		this.options = options;
		$('#js-boilerplate-app').html(this.el);
	},

	render: function(){
		this.$el.empty().append(template({ names: this.options.data }));
	},

	postTest: function(){
		var input = $('input[name="test"]');
		var value = input.val();
		var name  = new TestModel({ "name": value });
		var home  = this;

		input.val("");

		name.save(null , {
			success: function (newModel) {
				home.$('.name-list').append('<li><a href="#testing/' + newModel.attributes._id + '">' + newModel.attributes.name + '</a></li>');
			}
		});
	}

});

module.exports = AppView;
