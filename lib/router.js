const express = require("express");
const { addHighscore, getHighscores } = require("./highscore");

const router = express.Router();

router.get("/games", async (request, response) => {
  const highscores = await getHighscores();
  response.json(highscores);
});

router.post("/games", async (request, response) => {
  const highscore = request.body;
  await addHighscore(highscore);
  response.json();
});

module.exports = router;
