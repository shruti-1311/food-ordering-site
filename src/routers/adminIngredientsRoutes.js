
const express = require('express');
const router = express.Router();
const ingredientController = require("../controllers/ingredientController");
const authenticate = require('../middleware/authenticate');

router.post('/category',authenticate,ingredientController.createIngredientCategory);
router.post('',authenticate,ingredientController.createIngredient);
router.put('/:id/stoke',ingredientController.updateStoke);
router.get('/restaurant/:id',authenticate,ingredientController.updateStoke);
router.get('/restaurant/:id/category',authenticate,ingredientController.restaurantsIngredientCategory);

module.exports = router;