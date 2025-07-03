// src/routers/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authenticate = require('../middleware/authenticate');

// 🛒 Correctly define all routes with proper middleware and handlers
router.get('/', authenticate, cartController.findUserCart);
router.put('/clear', authenticate, cartController.clearCart);
router.post('/add', authenticate, cartController.addItemToCart);

module.exports = router;
