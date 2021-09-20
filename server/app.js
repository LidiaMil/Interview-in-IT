require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');
const redis = require('redis');
const session = require('express-session');

const questionRouter=require('./routes/questionRouter')
const authRouter=require('./routes/authRouter')
const mainRouter=require('./routes/mainRouter')

const cors = require("cors");

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
  name:'sId',
  saveUninitialized: false,
  secret: 'gdfgdfgdfgdfg',
  resave: false,
}))


app.use('/question', questionRouter);
app.use('/auth', authRouter)
app.use('/main', mainRouter)




app.listen(PORT, () => {
  console.log(`success`);
});
