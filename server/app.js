require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');
const redis = require('redis');
const session = require('express-session');

const authRouter=require('./routes/authRouter')
const mainRouter=require('./routes/mainRouter')

const cors = require("cors");
  
  
const app = express();
  
  // тут подключаем файлики
const editAccountRouter = require('./routes/editAccountRouter')
const interviewRouter=require('./routes/interviewRouter')
const indexRouter = require('./routes/indexRouter');
const organizations = require('./routes/organizationsRouter');

const PORT = 3000;

// тут подключаем файлики
const questionRouter=require('./routes/questionRouter')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));



const db = [{
  email: 'a@a.a',
  password: '123'
}]


//для редактирования профиля
app.use('/edit', editAccountRouter);



app.use(session({
  name:'sId',
  saveUninitialized: false,
  secret: 'gdfgdfgdfgdfg',
  resave: false,
}))




app.use('/', indexRouter);
app.use('/question', questionRouter);
app.use('/organizations', organizations)
app.use('/auth', authRouter)
app.use('/main', mainRouter)
app.use('/interview', interviewRouter);

app.listen(PORT, ()=> {
  console.log('Server start on ', PORT)
})

