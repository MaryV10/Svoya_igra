const QuestService = require("../services/questService");


async function getQuestsController(req, res) {
    try {
        const quests = await QuestService.getAllQuests();
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
}

async function createQuestController(req, res) {
    const {gameId, cardId} = req.body;
    try {
        const quest = await QuestService.createQuest(gameId, cardId);
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
}


module.exports = {
    getQuestsController,
    createQuestController
}