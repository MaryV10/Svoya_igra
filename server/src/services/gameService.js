const { Game, Card } = require("../../db/models");

class GameService {
  static async getGame(userId) {
    try {

       const game1 = await Game.findOne({
        where: { userId },
        include: { model: Card, as: "cards" },
      });
      console.log(game1, "GAME SERV")
      return game1
    } catch (error) {
      console.error(error);
    }
  }

  static async createGame(userId) {
    try {
      await Game.create({ userId, isActive: true, score: 0});
      return await Game.findOne({
        where: { userId,  isActive: true  },
        include: { model: Card, as: "cards" }});
    } catch (error) {
      console.error(error);
    }
  }

  static async updateStatusGame(userId) {
    try {
      const game = await Game.findOne({   where: { userId,  isActive: true  },
        include: { model: Card, as: "cards" } });
      if (game) {
        game.isActive = false;
        await game.save();
        return game;
      }
      return null;
    } catch (error) {
      console.error(error);
    }
  }


  static async updateScoreGame(userId, score) {
    try {
      const game = await Game.findOne({   where: { userId,  isActive: true  },
        include: { model: Card, as: "cards" } });
      if (game) {
        game.score = game.score + score;
        await game.save();
        return game;
      }
      return null;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = GameService;
