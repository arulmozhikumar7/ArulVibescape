const songController = require("../controllers/songController");
const router = require("express").Router();

router.post("/upload", songController.createSong);

module.exports = router;
