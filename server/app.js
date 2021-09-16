require('dotenv').config();
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
const indexRouter = require('./routes/indexRouter');
const organizations = require('./routes/organizationsRouter');



app.set('view engine', 'hbs');


//session middleware

app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());

const quoteAPI = require('quote-indo');

(async () => {
    const query = 'bucin'
    const quote = await quoteAPI.Quotes(query);

    console.log(quote);
})()


app.use('/', indexRouter);
app.use('/organizations', organizations)

app.listen(PORT, ()=> {
  console.log('Server start on ', PORT)
})
