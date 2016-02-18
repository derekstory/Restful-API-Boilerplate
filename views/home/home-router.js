var Backbone = require('backbone');
var $ = require('jquery');
var HomePage = require('./home');

var Router = Backbone.Router.extend({

    routes: {
        '': 'homePage'
    },

    homePage: function() {
        new HomePage({ el: $('#js-boilerplate-app') }).render();
    },

});

module.exports = Router;
