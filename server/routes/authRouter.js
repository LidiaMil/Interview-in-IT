const router = require('express').Router();
const {Question,User} = require('../db/models');

// //переделал авторизацию через node-localstorage(nodeLocalStorage)
//   let LocalStorage = require('node-localstorage').LocalStorage;
//   localStorage = new LocalStorage('./scratch');








// const db = [{
//   email: 'a@a.a',
//   password: '123'
// }]




//для авторизации
router.post("/login", async (req, res) => {
 console.log(req.body);
  const {email, password} = req.body
  const user = await User.findOne({where: {email: email, parol: password}})
  //const user = db.find((user) => user.email === email && user.password === password)
  if (user) {
    req.session.user = {id: user.id}
    console.log('сессия тут', req.session);
    //localStorage.setItem('in_user', true)
    //console.log('tttttt====>', localStorage.getItem('in_user'));
    return res.json({id: user.id})
  }
  
  res.status(401).end()
});


router.get('/logout', (req, res) => {
  console.log(req.session);
  if(req.session) {req.session.destroy(() => {
    localStorage.removeItem('in_user')
    res.clearCookie('connect.sid')
    res.end()
  })}
  else {
    res.end()
  }
  
  })

  router.post('/registry', (req, res) => {
    console.log(req.body);
    const registry = User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      parol: req.body.password,
      })
      res.end()
  })


  router.post('/one_user', async (req, res) => {
    console.log('0000000', req);
    //const one_user_data = await User.findOne(where)



    })



module.exports=router
