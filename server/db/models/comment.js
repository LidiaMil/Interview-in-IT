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
    static associate({CommentRating,User,Question}) {
      Comment.hasMany(CommentRating, {
        foreignKey: "comment_id",
      });
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
    text: DataTypes.TEXT,
    data:{
      type:DataTypes.DATEONLY,
      defaultValue: new Date()
    } ,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
