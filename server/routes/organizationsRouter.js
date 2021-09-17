const express = require('express');
const router = express.Router();
const {Organization} = require('../db/models')
const {Raiting} = require('../db/models')
 
router.get('/', async (req, res) => {
  //  console.log( req.params.id)
  // const organization = await Organization.findAll() Raiting
  const rating = await Organization.findAll({include: Raiting})

    res.json(rating)
  })
router.post('/rating', async (req, res) => {
     console.log( req.body)
    // const organization = await Organization.findAll() Raiting
    const rating = await Organization.create({userId:1,organization_id:1 })
    // const rating = await Raiting.findAll({include: Organization})
  
  console.log('ok')
  
      res.json(rating)
    })

module.exports = router
