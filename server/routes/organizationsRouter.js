const express = require('express');
const router = express.Router();
const {Organization, Raiting, OrganizationQuestion, Question, Interview} = require('../db/models')

 
router.get('/', async (req, res) => {
  //  console.log( req.params.id)
  // const organization = await Organization.findAll() Raiting
  const rating = await Organization.findAll({include: Raiting})

    res.json(rating)
  })


router.patch('/rating', async (req, res) => {
     
     console.log("hui", req.body)
    // const organization = await Organization.findAll() Raiting
    const rating = await Raiting.create({userId:1,organization_id:req.body.id, number: req.body.newValue })
    // const rating = await Raiting.findAll({include: Organization})
    
    res.json(rating)
    })



  router.get('/:id', async (req, res) => {
       const id = req.body.id
       console.log(id)
      // const organization = await Organization.findAll() Raiting
      const rating = await OrganizationQuestion.findAll({include: {
        model: Interview,
        where: {organization_id: id}
      }})
    console.log(rating)
        res.json(rating)
      })

module.exports = router
