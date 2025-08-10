const User = require("../models/userModel");
const userService = require("../service/userService");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const result = await userService.registerUser({ name, email, password });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const result = await userService.loginUser({ email, password });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error logging in user", error });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
