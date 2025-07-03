// src/routers/cartItemRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authenticate = require('../middleware/authenticate');

router.put('/update', authenticate, cartController.updateCartItemQuantity);
router.delete('/:id/remove', authenticate, cartController.removeItemFromCart);

module.exports = router;
