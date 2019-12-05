const { getCollection } = require("./database");

function getHighscoreCollection() {
  return getCollection("games");
}

function addHighscore(highscore) {
  return getHighscoreCollection().insertOne(highscore);
}

function getHighscores() {
  return getHighscoreCollection()
    .find()
    .sort({ score: -1 })
    .toArray();
}

exports.addHighscore = addHighscore;
exports.getHighscores = getHighscores;
