const express = require('express');
const router = express.Router();
const { Organization, Raiting, OrganizationQuestion, Question, Interview, User, Categorey } = require('../db/models')


router.get('/', async (req, res) => {
  const rating = await Organization.findAll({ include: Raiting })
  res.json(rating)
})


router.patch('/rating', async (req, res) => {


  const rating = await Raiting.create({ userId: 1, organization_id: req.body.id, number: req.body.newValue })


  res.json(rating)
})



router.get('/:id', async (req, res) => {
  const id = req.params.id
  const oneQuestions = await Interview.findAll(
    {
      include: [
        {
          model: User
        },
        {
          model: Question
        },
        {
          model: Categorey
        },
        {
          model: Organization
        },
      ],
      where: { id }
    });
  res.json(oneQuestions)
})

module.exports = router
