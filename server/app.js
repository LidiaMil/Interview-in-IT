require('dotenv').config();
const cors = require("cors");

const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');
//session
const redis = require('redis');
const session = require('express-session');
let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient()


const PORT = process.env.PORT || 3000;
const app = express();

// тут подключаем файлики

const Organizations = require('./routes/organizationsRouter');


app.set('view engine', 'hbs');


//session middleware

app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());

// const quoteAPI = require('quote-indo');

// (async () => {
//     const query = 'bucin'
//     const quote = await quoteAPI.Quotes(query);

//     console.log(quote);
// })()
app.use('/organizations', Organizations)


app.listen(PORT, ()=> {
  console.log('Server start on ', PORT)
})
