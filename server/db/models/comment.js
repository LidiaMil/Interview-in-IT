'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Question}) {
      // define association here
      Comment.belongsTo(User, {
        foreignKey: "user_id",
      });
      Comment.belongsTo(Question, {
        foreignKey: "question_id",
      });
    }
  };
  Comment.init({
    user_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    text: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
