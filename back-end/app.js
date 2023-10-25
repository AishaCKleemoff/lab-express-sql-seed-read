const express = require("express");
const app = express();
const cors = require("cors");
const songsController = require("./controllers/songController");
app.use(cors());
app.use(express.json());

app.use("/songs", songsController);

app.get("/", (req, res) => {
  res.send("Welcome to Jalal and Aisha's songs with Postgres");
});

app.get("*", (req, res) => {
  res.status(404).json({ success: false, data: { error: "page not found" } });
});

module.exports = app;
