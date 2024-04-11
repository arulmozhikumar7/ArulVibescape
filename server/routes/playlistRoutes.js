const playlistController = require("../controllers/playlistController");
const router = require("express").Router();

router.post("/create", playlistController.createPlaylist);
router.get("/get", playlistController.getPlaylist);
router.delete("/:id", playlistController.deletePlaylist);
module.exports = router;
