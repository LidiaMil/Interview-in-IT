const router = require('express').Router();
const { Question, User } = require('../db/models');
const bcrypt = require('bcrypt');

//для авторизации
// const {email, password} = req.body;
//     if(email && password){
//         const currentUser = await User.findOne({where:{email}})
//         if(currentUser && (await bcrypt.compare(password, currentUser.password))){
//             req.session.user = {name:currentUser.name, id:currentUser.id};
//             return res.redirect('/')
//         } else {
//             return  res.redirect('/user/signIn')
//         }
//     }
router.post("/login", async (req, res) => {
  const { email, password } = req.body
  if(email && password){
    const user = await User.findOne({ where: { email} })
     console.log(await bcrypt.compare(password, user.parol))
    if (user && (await bcrypt.compare(password, user.parol))) {
      req.session.user = { id: user.id }
      console.log('сессия тут', req.session);
      return res.json({ id: user.id })
    }

  }
  res.status(401).end()
});




router.get('/logout', (req, res) => {
  console.log(req.session);
  if (req.session) {
    req.session.destroy(() => {
      localStorage.removeItem('in_user')
      res.clearCookie('connect.sid')
      res.end()
    })
  }
  else {
    res.end()
  }

})

router.post('/registry', async (req, res) => {
  const {firstName, lastName, email, password } = req.body;
  if (firstName && email && password) {
    const hashPass = await bcrypt.hash(password, +process.env.SALTROUND);
    const newUser = await User.create({ firstName, lastName, email, parol: hashPass, photo:'https://skype-messengers.ru/wp-content/uploads/2019/03/user.png',role_id:2 }, { returning: true, plain: true });
    // const registry = User.create({
    //   firstName: req.body.firstName,
    //   lastName: req.body.lastName,
    //   email: req.body.email,
    //   parol: req.body.password,
    // })
    req.session.user = { firstName: newUser.firstName,lastName:newUser.lastName, id: newUser.id };
    return res.redirect('/')
  }
  else {
    return res.end()
  }
})

router.post('/one_user', async (req, res) => {
  const one_user = await User.findOne({ where: { id: Number(req.body.id) } })
  console.log(one_user);
  res.send(one_user)
})



module.exports = router
