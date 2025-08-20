const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Function to generate token (you’ll use this in loginUser)
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email }, // payload
    process.env.JWT_SECRET,
    { expiresIn: "1d" } // expiry
  );
};

module.exports = { generateToken };
