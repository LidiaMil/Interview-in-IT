const router = require('express').Router();
const { User, Interview, Categorey, Organization, Question, Language } = require('../db/models');

const multer = require("multer");
const storageConfig = multer.diskStorage({
  destination: './public/pics',
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({
  storage: storageConfig,
  // limits: { fileSize: 2000000 }, //ставим лимит на размер файла 2мб
}).single('image');

router.post("/upload", function (req, res, next) {
  upload(req, res, async (err) => {
    const id = Number(req.body.id);
    const firstName = req.body.nickname;
    if (req.file) {
      const photo = `http://localhost:3000/${req.file.path}`
      if (err) {
        res.json({ message: err, });
      } else {
        await User.update({ firstName, photo }, { where: { id } })
        const usersData = await User.findOne({ where: { id } })
        res.json(usersData)
        // res.status(200).end()

      }
    } else if (firstName) {
      if (err) {
        res.json({ message: err, });
      } else {
        User.update({ firstName }, { where: { id } })
        res.status(201).end()
      }
    } else {
      res.status(404).end()
    }
  })
});

router.get('/getusersposts/:id', async (req, res) => {
  const user_id = Number(req.params.id)
  const posts = await Interview.findAll(
    {
      where: {
        user_id
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
    
      ]
    })
  res.json(posts)
})


// router.get('/editinterview/:id', async (req, res) => {
//   // const id = Number(req.params.id)

// })

router.delete('/interview/:id', async (req, res) => {
  const { id } = req.params
  // console.log("id----", id);
  await Interview.destroy({ where: { id: Number(id) } })
  return res.status(200)
})


// router.get('/datainterview/:id', async (req, res) => {
//   const { id } = req.params
//   console.log("====>", +id);
// })


router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const user = await User.findOne({ where: { id } });
  res.json(user)
})


module.exports = router
