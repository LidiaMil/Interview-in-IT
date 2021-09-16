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

const PORT = process.env.PORT ?? 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(PORT, () => {
  console.log(`success`);
});
