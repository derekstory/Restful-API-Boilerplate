var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');
var template = require('./api-test.handlebars');

var AppView = Backbone.View.extend({

    initialize: function() {

    },

    render: function(){
        this.$el.empty().append(template());
        return this;
    }
});

module.exports = AppView;
