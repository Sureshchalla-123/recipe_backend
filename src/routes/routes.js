const router = require("express").Router();
const userController = require("../controllers/userController");

// auth routes
router.post("/auth/register", userController.registerUser);

router.post("/auth/login", userController.loginUser);

module.exports = router;
