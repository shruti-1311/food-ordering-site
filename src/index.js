const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express(); // ✅ MOVE THIS UP FIRST!

app.use(cors());
app.use(bodyParser.json());

// Routes
const authRoutes = require("./routers/authRoutes");
app.use("/api", authRoutes);



const restaurantRoutes = require("./routers/restaurantRoutes.js");
app.use("/api/restaurants", restaurantRoutes);

const adminRestaurantRoutes = require("./routers/adminRestaurantRoutes.js");
app.use("/api/admin/restaurants", adminRestaurantRoutes);

const orderRoutes = require("./routers/orderRoutes");
app.use("/api/orders", orderRoutes);


const menuItemRoutes = require("./routers/menuItemRoutes.js");
app.use("/api/food", menuItemRoutes);

const adminOrderRoutes = require("./routers/adminOrderRoutes.js");
app.use("/api/admin/order", adminOrderRoutes);

const cartRoutes = require("./routers/cartRoutes.js");
app.use("/api/cart", cartRoutes);

const cartItemRoutes = require("./routers/cartItemRoutes.js");
app.use("/api/cart-item", cartItemRoutes);

const categoryRoutes = require("./routers/categoryRoutes.js");
app.use("/api/category", categoryRoutes);

const adminCategoryRoutes = require("./routers/adminCategoryRoutes.js");
app.use("/api/admin/category", adminCategoryRoutes);

const adminIngredientsRoutes = require("./routers/adminIngredientsRoutes.js");
app.use("/api/admin/ingredients", adminIngredientsRoutes);

const adminEventRoutes = require("./routers/adminEventRoutes.js");
app.use("/api/admin/events", adminEventRoutes);

const eventRoutes = require("./routers/eventRoutes.js");
app.use("/api/events", eventRoutes);

const foodRoutes = require("./routers/foodRoutes.js");
app.use("/api", foodRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("API is working!");
});

module.exports = { app };
