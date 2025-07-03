// src/controllers/cartController.js
const cartService = require("../services/cartService");

module.exports = {
  addItemToCart: async (req, res) => {
    try {
      const user = req.user;
      const { menuItemId } = req.body;
      const cart = await cartService.addItemToCart(menuItemId, user._id);
      res.status(200).json(cart);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  findUserCart: async (req, res) => {
    try {
      const user = req.user;
      const cart = await cartService.findCartByUserId(user._id.toString());
      res.status(200).json(cart);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  clearCart: async (req, res) => {
    try {
      const user = req.user;
      const cart = await cartService.clearCart(user);
      res.status(200).json(cart);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateCartItemQuantity: async (req, res) => {
    try {
      const { cartItemId, quantity } = req.body;
      const updatedItem = await cartService.updateCartItemQuantity(cartItemId, quantity);
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  removeItemFromCart: async (req, res) => {
    try {
      const { id } = req.params;
      const user = req.user;
      const cart = await cartService.removeItemFromCart(id, user);
      res.status(200).json(cart);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};
