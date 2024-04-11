const likedsongsController = require("../controllers/likedsongsController");
const router = require("express").Router();

router.post("/add", likedsongsController.createLikedsongs);
router.get("/", likedsongsController.getAllLikedSongs);
router.delete("/:id", likedsongsController.removeLikedSong);
module.exports = router;
