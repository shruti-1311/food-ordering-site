// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   items: [
//     {
//       food: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
//       quantity: Number,
//       totalPrice: Number,
//     },
//   ],
//   total: Number,
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Order", orderSchema);


const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // ✅ user reference
  items: [
    {
      food: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
      quantity: Number,
      totalPrice: Number,
    },
  ],
  total: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
