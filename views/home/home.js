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
		var value = $('input[name="test"]').val();
		var name  = new TestModel({ "name": value });
		var home  = this;

		name.save(null , {
			success: function (newModel) {
				home.$('.name-list').append('<li data-id="' + newModel.attributes.name + '">' + newModel.attributes.name + '</li>');
			}
		});
	}

});

module.exports = AppView;
