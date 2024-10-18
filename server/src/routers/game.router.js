const { getGameController, createGameController, updateStatusGameController, updateScoreGameController } = require('../controllers/gameController');
const { verifyAccessToken } = require('../middlewares/verifyToken');

const gameRouter = require('express').Router();

gameRouter
.get("/",verifyAccessToken, getGameController)
.post("/", verifyAccessToken, createGameController)
.put("/status/:id", verifyAccessToken, updateStatusGameController)
.put("/score/:id", verifyAccessToken, updateScoreGameController);

module.exports = gameRouter;