const {Game} = require('../../db/models')

class GameService {

    static async getGame(userId) {
        try {
          return await Game.FindOne({where: {userId, isActive: true}})
        } catch (error) {
            console.error(error);
        }
    }

    static async createGame(userId) {
        try {
          return await Game.Create({userId, isActive: true})
        } catch (error) {
            console.error(error);
        }
    }

    static async updateStatusGame(userId) {
        try {
            const game = await Game.FindOne({where: {userId, isActive: true}});
            if (game) {
                game.isActive = false;
                await game.save();
                return game
            }
            return null
        } catch (error) {
            console.error(error); 
        }
}

static async updateScoreGame(userId, score) {
    try {
        const game = await Game.FindOne({where: {userId, isActive: true}});
        if (game) {
            game.score = game.score + score;
            await game.save();
            return game
        }
        return null
    } catch (error) {
        console.error(error); 
    }
}
}

module.exports = GameService