// server.js
const mongoose = require("mongoose");
const { app } = require("./index");

const PORT = process.env.PORT || 5454;

const MONGO_URI = "mongodb+srv://shrutipawar1311:vEzUmmkcDGOy02Rd@cluster0.j03iq21.mongodb.net/foodapp?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB Atlas");
  app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection failed:", err.message);
});
