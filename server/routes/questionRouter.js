const router = require('express').Router();
const {Question,User,Language,Organization} = require('../db/models');


router.get('/', async(req, res) => {

  const questions = await Question.findAll({
    include: [
      {
      model: User,
      as: 'User'
    },
    {
      model: Language
    },
    {
      model: Organization
    },
  ]
  });
  console.log(questions)
  res.json(questions);
});

module.exports=router
