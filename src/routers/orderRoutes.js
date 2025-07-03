const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authenticate = require("../middleware/authenticate");

router.post("/place", authenticate, orderController.placeOrder); // ✅ POST route for placing order
router.get("/my", authenticate, orderController.getMyOrders);    // ✅ GET route for user's orders

router.delete("/:id", authenticate, orderController.deleteOrder);


module.exports = router;
