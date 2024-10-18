const { getGameController, createGameController, updateStatusGameController, updateScoreGameController } = require('../controllers/gameController');
const { verifyAccessToken } = require('../middlewares/verifyToken');

const gameRouter = require('express').Router();

gameRouter
.get("/", getGameController)
.post("/", verifyAccessToken, createGameController)
.put("/status", verifyAccessToken, updateStatusGameController)
.put("/score", verifyAccessToken, updateScoreGameController);

module.exports = gameRouter;