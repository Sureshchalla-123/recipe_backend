const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

function connectDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

module.exports = connectDB;
