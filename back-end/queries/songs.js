const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (err) {
    return err;
  }
};
const getOneSong = () => {};

const deleteSong = () => {};

const updateSong = () => {};

module.exports = {
  getAllSongs,
};