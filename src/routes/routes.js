const router = require("express").Router();
const { registerUser, loginUser } = require("../controllers/userController");

// auth routes
router.post("/auth/register", registerUser);

router.post("/auth/login", loginUser);

module.exports = router;
