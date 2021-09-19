const router = require('express').Router();
const { Categorey,Interview,Question, User, Language, Organization, Comment } = require('../db/models');


router.get('/', async (req, res) => {

  const questions = await Interview.findAll({
    include: [
      {
        model: User,
        as: 'User'
      },
      {
        model: Question
      },
      {
        model: Categorey
      },
      {
        model: Organization
      },
    ]
  });
  // console.log(questions)
  res.json(questions);
});

router.get('/question/:id', async (req, res) => {
  let thisId = req.params.id
  console.log("-----------", thisId);
  const oneQuestions = await Question.findOne(
    {
      where: { 
        id: thisId 
      },
      include: [
        {
          model:Interview,
        },
        {
          model: Language
        },
        {
          model: Comment
        }
      ]
    });
  //console.log(oneQuestions);
  res.json(oneQuestions);
})

router.get('/comment/:id', async (req, res) => {
  let thisId = req.params.id
  console.log("+++++", thisId);
  const oneQuestions = await Question.findOne(
    {
      where: { 
        id: thisId 
      },
      include: [
        {
          model:Interview,
        },
        {
          model: Language
        },
        {
          model: Comment
        }
      ]
    });
  //console.log(oneQuestions);
  res.json(oneQuestions);
})

router.post("/comment/:id", (req, res) => {
  const id=req.params.id
  console.log(req.body)
  const { text} = req.body;
  
  return res.sendStatus(406);
});

module.exports = router
