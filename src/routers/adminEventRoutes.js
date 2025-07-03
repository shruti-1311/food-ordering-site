

const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authenticate = require('../middleware/authenticate');


router.post('/restaurant/:restaurantId',eventController.createEvents);

router.get('/restaurant/:restaurantId', eventController.findRestaurantsEvents);
router.delete('/:id', eventController.deleteEvents);

module.exports = router;