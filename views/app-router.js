var Backbone = require('backbone');
var $ = require('jquery');
var HomeRouter = require('./home/home-router');
var ApiTestRouter = require('./api-test/api-test-router');

var AppRouter = Backbone.Router.extend({

    initialize: function() {
        new HomeRouter();
        new ApiTestRouter();
    },

});


module.exports = AppRouter;
