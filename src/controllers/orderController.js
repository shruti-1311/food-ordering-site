const Order = require("../models/order.model");
const Cart = require("../models/cart.model");
const CartItem = require("../models/cartItem.model");

exports.placeOrder = async (req, res) => {
  try {
    const user = req.user;
    const cart = await Cart.findOne({ customer: user._id }).populate("items");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const items = await Promise.all(cart.items.map(async (itemId) => {
      const item = await CartItem.findById(itemId).populate("food");
      return {
        food: item.food._id,
        quantity: item.quantity,
        totalPrice: item.totalPrice,
      };
    }));

    const total = items.reduce((sum, i) => sum + i.totalPrice, 0);

    const order = new Order({ user: user._id, items, total });
    await order.save();

    // Clear the cart after placing order
    cart.items = [];
    await cart.save();

    res.status(201).json({ message: "Order placed", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const user = req.user;
    const orders = await Order.find({ user: user._id }).populate("items.food");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const user = req.user;
    const orderId = req.params.id;

    const order = await Order.findOne({ _id: orderId, user: user._id });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await Order.deleteOne({ _id: orderId });
    res.status(200).json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getAllRestaurantOrders = async (req, res) => {
  res.status(501).json({ message: "Restaurant orders not implemented" });
};

exports.updateOrder = async (req, res) => {
  res.status(501).json({ message: "Update order not implemented" });
};
