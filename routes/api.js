var app = require('express'),
	homeController = require('../controllers/home-controller'),
	testItemController = require('../controllers/test-item-controller'),
	loginController = require('../controllers/login-controller'),
	logoutController = require('../controllers/logout-controller'),
	router = app.Router();

// Home Routers
router.get('/testmodel', homeController.getTestModel);
router.delete('/testmodel', homeController.deleteTestModel);
router.post('/testmodel', homeController.postTestModel);

// Test Item Routers
router.get('/testitem', testItemController.getTestItem);

// Login
router.get('/login', loginController.sessionCheck);
router.post('/login', loginController.login);

// Logout
router.post('/logout', logoutController.logout);

module.exports = router;
