'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Language,LanguageQuestion,Interview,Comment}) {
      Question.belongsToMany(Language, {
        through: LanguageQuestion,
        foreignKey:'question_id'
      });
      Question.hasMany(Comment, {
        foreignKey: "question_id",
      });
      Question.belongsTo(Interview,{
        foreignKey: "interview_id",
      })
      // define association here
    }
  };
  Question.init({
    text: DataTypes.TEXT,
    interview_id: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
