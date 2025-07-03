// src/models/cartItem.model.js
const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Food",
  },
  quantity: {
    type: Number,
    default: 1,
  },
  totalPrice: Number,
});

module.exports = mongoose.model("CartItem", CartItemSchema);
