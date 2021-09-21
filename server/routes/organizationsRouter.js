const express = require('express');
const router = express.Router();
const { Organization, Raiting, OrganizationQuestion, Question, Interview } = require('../db/models')


router.get('/', async (req, res) => {
  //  console.log( req.params.id)
  // const organization = await Organization.findAll() 
  // console.log(organization)
  // res.json(organization)
  // const organization = await Organization.findAll() Raiting
  const rating = await Organization.findAll({ include: Raiting })

  res.json(rating)
})


router.patch('/rating', async (req, res) => {

  console.log("hui", req.body)
  // const organization = await Organization.findAll() Raiting
  const rating = await Raiting.create({ userId: 1, organization_id: req.body.id, number: req.body.newValue })
  // const rating = await Raiting.findAll({include: Organization})

  res.json(rating)
})


router.get('/:id', async (req, res) => {
  const id = req.params.id
  console.log('it id', id)
  const oneQuestions = await Interview.findAll(
    {
      include: [
        {
          model: Organization,
        },
      ],
      where: { id }
    });
  console.log(oneQuestions)
  res.json(oneQuestions)
})

module.exports = router
