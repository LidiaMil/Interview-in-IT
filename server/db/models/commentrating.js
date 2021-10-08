'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentRating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Comment,User}) {
      // define association here
      this.belongsTo(Comment, {
        foreignKey: "comment_id",
      });
      this.belongsTo(User, {
        foreignKey: "user_id",
      });
    }
  };
  CommentRating.init({
    comment_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    count: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'CommentRating',
  });
  return CommentRating;
};
