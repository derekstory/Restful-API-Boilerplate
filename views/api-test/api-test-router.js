var Backbone = require('backbone');
var $ = require('jquery');
var TestPage = require('./api-test');

var Router = Backbone.Router.extend({

    routes: {
        'testing': 'testRoute'
    },

    testRoute: function () {
        new TestPage({ el: $('#js-boilerplate-app') }).render();
    },

});

module.exports = Router;
