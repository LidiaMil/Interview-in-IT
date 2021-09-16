require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');
const redis = require('redis');
const session = require('express-session');
let RedisStore = require('connect-redis')(session);

const questionRouter = require('./routes/questionRouter');

let redisClient = redis.createClient()
const cors = require("cors");

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/question', questionRouter);


app.listen(PORT, () => {
  console.log(`success`);
});
