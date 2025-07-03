const express = require("express");
const router = express.Router();
const Food = require("../models/food.model");

// GET all food items
router.get("/foods", async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch foods" });
  }
});

// POST new food item
router.post("/foods", async (req, res) => {
  try {
    const newFood = await Food.create(req.body);
    res.status(201).json(newFood);
  } catch (err) {
    res.status(500).json({ message: "Failed to create food", error: err.message });
  }
});

// PUT update food
router.put("/foods/:id", async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(food);
  } catch (err) {
    res.status(500).json({ message: "Failed to update food" });
  }
});

// DELETE food
router.delete("/foods/:id", async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete food" });
  }
});


module.exports = router;
