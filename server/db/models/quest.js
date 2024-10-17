'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quest extends Model {
   
    static associate(models) {
      
    }
  }
  Quest.init({
    gameId: DataTypes.INTEGER,
    cardId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Quest',
  });
  return Quest;
};