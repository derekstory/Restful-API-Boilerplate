var app = require('express'),
	homeController = require('../controllers/home-controller'),
	testItemController = require('../controllers/test-item-controller'),
	router = app.Router();

// Home Routers
router.get('/testmodel', homeController.getTestModel);
router.delete('/testmodel', homeController.deleteTestModel);
router.post('/testmodel', homeController.postTestModel);

// Test Item Routers
router.get('/testitem', testItemController.getTestItem);

module.exports = router;
