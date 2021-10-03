require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');
const redis = require('redis');
const session = require('express-session');
let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient()
const cors = require("cors");

const app = express();




// тут подключаем файлики
const authRouter=require('./routes/authRouter')
const mainRouter=require('./routes/mainRouter')
const editAccountRouter = require('./routes/editAccountRouter')
const interviewRouter=require('./routes/interviewRouter')
const indexRouter = require('./routes/indexRouter');
const organizations = require('./routes/organizationsRouter');
const questionRouter=require('./routes/questionRouter')

const PORT = 3000;

app.use(
  session({
    name:'sId',
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: process.env.SESSIONSECRET,
    resave: false,
  })
)
app.use(cors({credentials: true, origin: 'http://localhost:3001'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.use('/', indexRouter);
app.use('/question', questionRouter);
app.use('/organizations', organizations)
app.use('/auth', authRouter)
app.use('/main', mainRouter)
app.use('/edit', editAccountRouter);
app.use('/interview', interviewRouter);

app.listen(PORT, ()=> {
  console.log('Server start on ', PORT)
})

