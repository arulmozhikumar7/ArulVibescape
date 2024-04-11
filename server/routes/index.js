const router = require("express").Router();

const authRoutes = require("./authRoutes");
const likedsongsRoutes = require("./likedsongsRoutes");
const playlistsRoutes = require("./playlistRoutes");
const songsRoutes = require("./songsRoutes");
const authMiddleware = require("../middleware/authMiddleware");

router.use("/auth", authRoutes);
router.use("/likedsongs", authMiddleware, likedsongsRoutes);
router.use("/playlists", authMiddleware, playlistsRoutes);
router.use("/songs", songsRoutes);

module.exports = router;
