const { getQuestsController, createQuestController } = require("../controllers/questController");
const { verifyAccessToken } = require("../middlewares/verifyToken");

const questRouter = require("express").Router();

questRouter
.get("/", getQuestsController)
.post("/", verifyAccessToken, createQuestController)

module.exports = questRouter