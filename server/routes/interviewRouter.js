const router = require('express').Router();
const { OrganizationQuestion, LanguageQuestion, Categorey, Interview, Question, User, Language, Organization, Comment } = require('../db/models');


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
      }
    ],
    order: [['id', 'DESC']]
  });
  res.json(questions);
});

router.post('/filter', async (req, res) => {
  const { categories, company_id } = req.body;
  let mas = [];
  let questions;
  if (!categories && !company_id) {
    questions = await Interview.findAll({
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
    if (!questions.length) {
      questions = mas
    }
  }
  if (categories) {
    questions = await Interview.findAll({
      where: { categorey_id: categories },
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
    if (!questions.length) {
      questions = mas
    }
  }
  if (company_id) {
    let org = await Organization.findAll({
      include: [
        {
          model: Interview
        },
      ],
      where: { id: company_id },
    })
    let interview_id = []
    for (let i = 0; i < org[0].Interviews.length; i++) {
      interview_id.push(org[0].Interviews[i].id)
    }
    questions = []
    for (let i = 0; i < interview_id.length; i++) {
      oneQuestion = await Interview.findOne({
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
        ],
        where: { id: interview_id[i] },
      });
      questions.push(oneQuestion)
    }
    if (!questions.length) {
      questions = mas
    }
  }
  if (categories && company_id) {

    let org = await Organization.findAll({
      include: [
        {
          model: Interview
        },
      ],
      where: { id: company_id },
    })
    let interview_id = []
    for (let i = 0; i < org[0].Interviews.length; i++) {
      interview_id.push(org[0].Interviews[i].id)
    }
    questions = []
    for (let i = 0; i < interview_id.length; i++) {
      oneQuestion = await Interview.findOne({
        where: { categorey_id: categories, id: interview_id[i] },
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
        ],
      });
      if (oneQuestion) {
        questions.push(oneQuestion)
      }
    }
    if (!questions.length) {
      questions = mas
    }
  }
  if (questions.length) {
    res.json(questions);
  }
  else {
    res.json(mas);
  }
});

router.get('/favorite', async (req, res) => {
  const favoritePosts = await Interview.findAll(
    {
      where: {
        favorites: true
      },
      include: [
        {
          model: Categorey
        },
        {
          model: Organization
        },
        {
          model: Question
        },
        {
          model: User
        }
      ]
    })
  res.json(favoritePosts)
})

router.get('/favorite/:id', async (req, res) => {
  const id = req.params.id
  const favorite = await Interview.findOne({
    where: { id }
  });
  res.json(favorite.favorites);
});

router.patch('/favorite/:id', async (req, res) => {
  const id = req.params.id
  let favorite = await Interview.findOne({
    where: { id }
  });
  const newFav = await Interview.update({
    favorites: !favorite.favorites
  },
    {
      where: { id }
    });
  favorite = await Interview.findOne({
    where: { id }
  });
  res.json(favorite.favorites);
});

router.get('/new', async (req, res) => {
  const categories = await Categorey.findAll();
  res.json(categories);
});
router.get('/newLang', async (req, res) => {
  const language = await Language.findAll();
  res.json(language);
});
router.get('/newOrg', async (req, res) => {
  const organization = await Organization.findAll();
  res.json(organization);
});

router.post("/new", async (req, res) => {
  const { user, title, description, categories, level, questionsWITHlang, company_id } = req.body;

  if (title && categories && questionsWITHlang && level && company_id) {
    const newInterview = await Interview.create({ name: title, level, description: description, categorey_id: categories, user_id: user, favorites: false })
    if (typeof Number(company_id) == 'string') {
      const newCompany = await Organization.create({ title: company_id })
      const ququ = await OrganizationQuestion.create({ organization_id: newCompany.id, interview_id: newInterview.id })
    }
    else {
      const ququ = await OrganizationQuestion.create({ organization_id: company_id, interview_id: newInterview.id })
    }
    for (let i = 0; i < (Object.keys(questionsWITHlang).length / 2) - 1; i++) {
      const newQuestion = await Question.create({ interview_id: newInterview.id, text: questionsWITHlang[i] })
      const lang = await LanguageQuestion.create({ question_id: newQuestion.id, language_id: questionsWITHlang[`select-${i}`] })
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
      where: { id: newInterview.id }
    });
    return res.json(news);
  }
  else {
    return res.sendStatus(404);
  }
});


router.get('/:id', async (req, res) => {
  let thisId = req.params.id
  const question = await Interview.findOne({
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
    where: { id: thisId }
  });
  res.json(question);
});

router.get('/user/:id', async (req, res) => {
  let thisId = req.params.id
  const oneQuestions = await User.findOne(
    {
      where: {
        id: thisId
      },
    });
  res.json(oneQuestions);
})


router.get('/question/:id', async (req, res) => {
  let thisId = req.params.id
  const oneQuestions = await Question.findOne(
    {
      where: {
        id: thisId
      },
      include: [
        {
          model: Interview,
        },
        {
          model: Language
        },
        {
          model: Comment
        }
      ]
    });
  res.json(oneQuestions);
})

router.get('/comment/info/:id', async (req, res) => {
  let thisId = req.params.id

  const oneQuestions = await Comment.findAll(
    {
      where: {
        question_id: thisId
      },
      include: [
        {
          model: User,
        }
      ]
    });
  res.json(oneQuestions);
})

router.get('/comment/:id', async (req, res) => {
  let thisId = req.params.id
  const oneQuestions = await Question.findOne(
    {
      where: {
        id: thisId
      },
      include: [
        {
          model: Interview,
        },
        {
          model: Language
        },
        {
          model: Comment
        }
      ]
    });
  res.json(oneQuestions);
})

router.patch('/comment/:id', async (req, res) => {
  let thisId = req.params.id
  const oneQuestions = await Question.findAll({ where: { interview_id: thisId } })
  let arr = []
  for (let i = 0; i < oneQuestions.length; i++) {
    arr.push(oneQuestions[i].id)
  }
  let mas = []
  for (let i = 0; i < oneQuestions.length; i++) {
    mas.push(await Comment.count({ where: { question_id: arr[i] } }))
  }
  res.json(mas);
})

router.delete("/comment/:id/:post", async (req, res) => {
  const id = req.params.id;
  let post = req.params.post
  await Comment.destroy({ where: { id: Number(id) } })
  const oneQuestions = await Comment.findAll(
    {
      where: {
        question_id: post
      }
    });
  return res.json(oneQuestions);
});

router.post("/comment/:id/:idUser", async (req, res) => {
  const id = req.params.id
  const user = req.params.idUser
  const { text, Users } = req.body;
  try {
    const newComment = await Comment.create({ user_id: Users.id, question_id: id, text: text })
    const oneQuestions = await Comment.findOne(
      {
        where: {
          id: newComment.id
        },
        include: [
          {
            model: User,
          }
        ]
      });

    return res.json(oneQuestions);
  } catch (err) {
  }
});

module.exports = router

