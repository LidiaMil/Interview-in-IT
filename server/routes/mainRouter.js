const router = require('express').Router();
const {Question, User, Organization} = require('../db/models');


router.get('/', async(req, res) => {

  console.log('ttttuuutsi')
  const questions = await Question.findAll();
  const organiz = await Organization.findAll()
  res.json({questions, organiz});
});

module.exports=router
