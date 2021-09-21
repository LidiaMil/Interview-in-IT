const router = require('express').Router();
const { OrganizationQuestion,LanguageQuestion,Categorey,Interview,Question, User, Language, Organization, Comment } = require('../db/models');


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
router.get('/newOrg', async (req, res) => {
  const organization = await Organization.findAll();
  console.log(organization)
  res.json(organization);
});

router.post("/new", async(req, res) => {
  const id=req.params.id
  console.log(req.body)
  const { title,description,categories,level,questionsWITHlang,company_id} = req.body;
  if(title && categories && questionsWITHlang && level && company_id){
    const newInterview= await Interview.create({name:title,level,description:description,categorey_id:categories,user_id:1})
    const ququ= await OrganizationQuestion.create({organization_id:company_id,interview_id:newInterview.id})
    console.log(ququ,"+++++++")
    for(let i=0;i<Object.keys(questionsWITHlang).length/2;i++){
      const newQuestion= await Question.create({interview_id:newInterview.id,text:questionsWITHlang[i]})
      console.log(i,newQuestion)
      const lang= await LanguageQuestion.create({question_id:newQuestion.id,language_id:questionsWITHlang[`select-${i}`]})
      console.log(i,lang)
    }

    const news = await Interview.findOne({
    include: [
      {
        model: User
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
    ],
    where:{id:newInterview.id}
  });
  return res.json(news);
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
