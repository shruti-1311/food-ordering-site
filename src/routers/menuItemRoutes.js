
const express =require('express');
const router  = express.Router();
const foodController = require("../controllers/foodController");

router.get('/search', foodController.searchFood);
router.get('/restaurant/:restaurantId', foodController.getMenuItemByRestaurantId);

router.get("/foods", async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch foods" });
  }
});

router.post("/foods", async (req, res) => {
  try {
    const newFood = await Food.create(req.body);
    res.status(201).json(newFood);
  } catch (err) {
    res.status(500).json({ message: "Failed to create food", error: err.message });
  }
});

module.exports = router;