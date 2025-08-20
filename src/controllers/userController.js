const User = require("../models/userModel");
const userService = require("../service/userService");
const validateUser = require("../utils/validateUser");
const { authMiddleware } = require("../middleware/auth");
const { generateToken } = require("../utils/generateToken");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validateUser.isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (!validateUser.isValidPassword(password)) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    const result = await userService.registerUser({ name, email, password });
    res.status(201).json({ message: result.message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validateUser.isValidEmail(email)) {
      return res.status(400).json({ message: "Email not valid" });
    }
    if (!validateUser.isValidPassword(password)) {
      return res.status(400).json({ message: "Password not valid" });
    }

    const result = await userService.loginUser({ email, password });

    if (!result.user) {
      return res.status(404).json(result);
    }

    const jwt_token = generateToken(result.user);
    res.status(200).json({ message: result.message, token: jwt_token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
