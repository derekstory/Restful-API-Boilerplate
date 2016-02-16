
var Backbone = require('backbone');
var $ = require('jquery');
var Router = require('./router');

var AppRouter = Backbone.Router.extend({

    initialize: function() {
        new Router();
    },

});


module.exports = AppRouter;
