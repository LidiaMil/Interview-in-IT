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

router.get('/new', async (req, res) => {
  const categories = await Categorey.findAll();
  // console.log(categories)
  res.json(categories);
});
router.get('/newLang', async (req, res) => {
  const language = await Language.findAll();
  // console.log(categories)
  res.json(language);
});

router.post("/new", async(req, res) => {
  const id=req.params.id
  console.log(req.body)
  const { title,level, description,categories,questions} = req.body;
  if(title && categories && questions && level){
    const newInterview= await Interview.create({name:title,level,description:description,categorey_id:categories,user_id:1})
    for(let i=0;i<Object.keys(questions).length;i++){
      const newQuestion= await Question.create({interview_id:newInterview.id,text:questions[i]})
    }
    return res.json(newInterview);
  }
  else{
    return res.sendStatus(404);
  }
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



router.post("/comment/:id", async(req, res) => {
  const id=req.params.id
  console.log(req.body)
  const { text} = req.body;
  try {
    const newComment= await Comment.create({user_id:1,question_id:id,text:text})
    console.log(newComment)
    return res.json(newComment);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router
