const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const userService = {
  registerUser: async (userData) => {
    const { name, email, password } = userData;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("User already exists");
      }

      const user = new User({ name, email, password });
      await user.save();

      return { message: "User registered successfully", user };
    } catch (error) {
      return { message: error.message };
    }
  },
  loginUser: async (userData) => {
    const { email, password } = userData;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error("Invalid credentials");
      }

      return { message: "User logged in successfully", user };
    } catch (error) {
      return { message: error.message };
    }
  },
};

module.exports = userService;
