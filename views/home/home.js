var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');
var template = require('./home.handlebars');

var TestModel = Backbone.Model.extend({
	urlRoot: '/api/test-model'
});

var AppView = Backbone.View.extend({

	tagName: 'section',

	className: 'home-page',

	events: {
		'click button': 'postTest',
		'click .delete': 'deleteItem'
	},

	initialize: function(options) {
		this.options = options;
		$('.main-content').html(this.el);
	},

	render: function(){
		this.$el.empty().append(template({ names: this.options.data }));
		return this;
	},

	postTest: function(){
		var input = $('input[name="test"]');
		var value = input.val();
		var name  = new TestModel({ "name": value });
		var $this  = this;

		// Clear
		input.val('');

		name.save(null , {
			success: function (newModel) {
				$this.$('.name-list').append('<li data-id="' + newModel.attributes._id + '"><span class="link-me" data-href="#testing/' + newModel.attributes._id + '">' + newModel.attributes.name + '</span> <span class="delete">X</span></li>');
			}
		});
	},

	deleteItem: function(e) {
		var item = $(e.currentTarget).closest('li');
		var itemId = item.data('id');
		$.delete('/api/test-model/' + itemId, function() {
			item.remove();
		}.bind(this));
	}

});

module.exports = AppView;
