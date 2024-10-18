const GameService = require("../services/gameService");

async function getGameController(req, res) {
  const userId = res.locals.user.id;

  try {
    const game = await GameService.getGame(userId);
    res.status(200).json({ game });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createGameController(req, res) {
    const userId = res.locals.user.id;
  try {
    const game = await GameService.createGame(userId);
    res.status(200).json({ game });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateStatusGameController(req, res) {
    const userId = res.locals.user.id;
  try {
    const game = await GameService.updateStatusGame(userId);
    res.status(200).json({ game });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateScoreGameController(req, res) {
    const userId = res.locals.user.id;
  const { score } = req.body;
  try {
    const game = await GameService.updateScoreGame(userId, score);
    res.status(200).json({ game });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getGameController,
  createGameController,
  updateStatusGameController,
  updateScoreGameController,
};
