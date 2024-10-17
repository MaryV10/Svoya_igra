'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
   
    static associate(models) {
      this.hasMany(models.Card, { foreignKey: 'topicId' });
    }
  }
  Topic.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};