require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');
const redis = require('redis');
const session = require('express-session');
let RedisStore = require('connect-redis')(session);



//переделал авторизацию через node-localstorage(nodeLocalStorage)
let LocalStorage = require('node-localstorage').LocalStorage,
  localStorage = new LocalStorage('./scratch');
const questionRouter = require('./routes/questionRouter')
const editAccountRouter = require('./routes/editAccountRouter')

//let redisClient = redis.createClient()
const cors = require("cors");

const app = express();

const PORT = process.env.PORT ?? 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.use(session(({
  secret: 'dgsgsgsdhrd',

})))

const db = [{
  email: 'a@a.a',
  password: '123'
}]

app.use('/question', questionRouter);

//для редактирования профиля
app.use('/edit', editAccountRouter);





//для авторизации
app.post("/login", (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body
  const user = db.find((user) => user.email === email && user.password === password)
  console.log(user);
  if (user) {
    req.session.user = {
      email,
    }
    localStorage.setItem('in_user', user.email)
    console.log('fgdfgdfgdf', localStorage.getItem('in_user'));
    return res.end()
  }

  res.status(401).end()
});


app.get('/logout', (req, res) => {
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


app.listen(PORT, () => {
  console.log(`success`);
});
