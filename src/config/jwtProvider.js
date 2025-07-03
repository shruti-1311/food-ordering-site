require("dotenv").config();
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY || "default_secret_key";

const generateToken = (userId) => {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: "48h" });
};

const getUserIdFromToken = (token) => {
  const decoded = jwt.verify(token, SECRET_KEY);
  return decoded.userId;
};

module.exports = {
  generateToken,
  getUserIdFromToken,
};
