const router = require('express').Router();
const { User } = require('../db/models');

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
  // console.log(req.body);
  upload(req, res, async (err) => {
    const id = Number(req.body.id);
    const firstName = req.body.nickname;
    const photo = `http://localhost:3000/${req.file.path}`
      // console.log("==>",photo);
    if (err) {
      res.json({
        message: err,
      });
    } else {
      User.update({ firstName, photo }, { where: { id } })
    }
  })
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const user = await User.findOne({ where: { id } });
  res.json(user)
})


module.exports = router


// router.route('/edit')
//   .post(checkAuthor, async (req, res) => {
//     const { nameProduct, descriptionProduct, priceProduct, artProduct, imgProduct, id } = req.body;
//     await Product.update({ nameProduct, descriptionProduct, priceProduct, artProduct, imgProduct }, {
//       where: { id }
//     })
//     res.status(200).end()
//   })
