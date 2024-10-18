const {Quest} = require("../../db/models");

class QuestService {

    static async getAllQuests() {
        try {
            return await Quest.findAll();
        } catch (error) {
            console.error(error);
        }
    }

    static async createQuest(gameId, cardId){
        try {
           await Quest.create({gameId, cardId}); 
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = QuestService