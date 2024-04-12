const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
const path = require("path");
app.use(cors());
dotenv.config();
app.use(express.json());

connectDB();
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/api", require("./routes"));

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
