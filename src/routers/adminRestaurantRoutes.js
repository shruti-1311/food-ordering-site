
const express = require('express');
const router = express.Router();
const adminRestaurantController = require('../controllers/restaurantController');
const authenticate = require('../middleware/authenticate');

router.post('/',authenticate,adminRestaurantController.createRestaurant);
router.put('/:id',authenticate,adminRestaurantController.updateRestaurantStatus);
router.delete('/:id/status',authenticate,adminRestaurantController.deleteRestaurantById);
router.get('/user',authenticate,adminRestaurantController.findRestaurantByUserId);

module.exports = router;