const { Topic, Card } = require("../../db/models");


class TopicService {
  static async getAllTopics() {
    try {
      return await Topic.findAll({
        include: {
          model: Card,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = TopicService;
