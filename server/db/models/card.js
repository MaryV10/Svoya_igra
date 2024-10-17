'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      this.belongsTo(models.Topic, { foreignKey: 'topicsId' });
      this.belongsToMany(models.Game, {
        as: "games",
        through: "Quests",
        foreignKey: "cardId",
      });
    }
  }
  Card.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    topicId: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};