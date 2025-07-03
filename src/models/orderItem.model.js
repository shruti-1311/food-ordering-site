// const mongoose = require("mongoose");

// const OrderItemSchema = new mongoose.Schema({
//     food: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Food',
//     },
//     quantity:Number,
//     totalPrice: Number,
//     ingredients: [String],
// });

// const OrderItem = mongoose.model('OrderItem', OrderItemSchema);
// module.exports = OrderItem;

    const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model("OrderItem", orderItemSchema);
