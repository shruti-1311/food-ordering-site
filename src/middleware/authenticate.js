const { getUserIdFromToken } = require("../config/jwtProvider");
const userService = require("../services/userService");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const userId = getUserIdFromToken(token);
    const user = await userService.findUserById(userId); // ✅ this now matches the renamed function

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = authenticate;
