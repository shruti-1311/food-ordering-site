// src/services/cartService.js
const Cart = require("../models/cart.model");
const CartItem = require("../models/cartItem.model");
const Food = require("../models/food.model");

module.exports = {
  async addItemToCart(menuItemId, userId) {
    let cart = await Cart.findOne({ customer: userId });

    if (!cart) {
      cart = new Cart({ customer: userId, items: [], total: 0 });
      await cart.save();
    }

    const food = await Food.findById(menuItemId);
    if (!food) throw new Error("Food item not found");

    const isPresent = await CartItem.findOne({
      cart: cart._id,
      food: food._id,
    });

    if (!isPresent) {
      const cartItem = new CartItem({
        cart: cart._id,
        food: food._id,
        quantity: 1,
        totalPrice: food.price,
      });

      const createdCartItem = await cartItem.save();
      cart.items.push(createdCartItem._id);
      await cart.save();
      return createdCartItem;
    }

    return isPresent;
  },

  async findCartByUserId(userId) {
    const cart = await Cart.findOne({ customer: userId });

    if (!cart) {
      throw new Error("Cart not found");
    }

    const cartItems = await CartItem.find({ cart: cart._id }).populate("food");

    return {
      _id: cart._id,
      customer: cart.customer,
      items: cartItems,
      total: cart.total
    };
  },

  async clearCart(user) {
    const cart = await Cart.findOne({ customer: user._id });
    if (!cart) throw new Error("Cart not found");

    await CartItem.deleteMany({ cart: cart._id });
    cart.items = [];
    await cart.save();
    return cart;
  }
};
