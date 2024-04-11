const authController = require("../controllers/authController");
const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.get("/user", authMiddleware, authController.getUser);
module.exports = router;
