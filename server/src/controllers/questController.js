const GameService = require("../services/gameService");
const QuestService = require("../services/questService");


async function getQuestsController(req, res) {
    try {
        const quests = await QuestService.getAllQuests();
        console.log(quests)
        res.status(200).json(quests)
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
}

async function createQuestController(req, res) {
    const {gameId, cardId} = req.body;
    const {user } = res.locals
    console.log(gameId, cardId)
    try {
        const game = await GameService.getGame(user.id)
        const quest = await QuestService.createQuest(game.id, cardId);
        res.status(200).json(quest)
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
}


module.exports = {
    getQuestsController,
    createQuestController
}