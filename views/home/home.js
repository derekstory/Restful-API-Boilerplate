var Backbone = require('backbone'),
	_ = require('lodash'),
	$ = require('jquery'),
	template = require('./home.handlebars');

var TestModel = Backbone.Model.extend({
	urlRoot: '/api/testmodel'
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
	},

	render: function(){
		this.$el.empty().append(template({ names: this.options.data }));
		return this;
	},

	postTest: function(){
		var input = $('input[name="test"]'),
			value = input.val(),
			name  = new TestModel({ "name": value }),
			$this  = this;

		if(input.val()) {
			name.save(null , {
				success: function (newModel) {
					input.val(''); // Clear field
					var html = '<li data-id="' + newModel.attributes.insertId + '">';
						html += '<span data-href="#testing/' + newModel.attributes.insertId + '">';
						html += newModel.attributes.name;
						html += '</span> <span class="delete">X</span></li>';
					$this.$('.name-list').append(html);
				}
			});
		}
	},

	deleteItem: function(e) {
		var item = $(e.currentTarget).closest('li'),
			itemId = item.data('id');

		$.delete('/api/testmodel/?id=' + itemId, function(e, d) {
			item.remove();
		}.bind(this));
	}

});

module.exports = AppView;
