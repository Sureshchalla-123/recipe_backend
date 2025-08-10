const express = require("express");
const connectDB = require("./src/config/db");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.get("/healthcheck", (req, res) => {
  res.status(200).json({ message: "server is running smoothly" });
});

app.listen(process.env.PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.error("Error starting server:", error);
  }
});
