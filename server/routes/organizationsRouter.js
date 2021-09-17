const express = require('express');
const router = express.Router();
const {Organization} = require('../db/models')
const {Rating} = require('../db/models')
 
router.get('/', async (req, res) => {
  //  console.log( req.params.id)
  const organization = await Organization.findAll() 
  const rating = Rating.findAll({include: Organization})
    res.json(rating)
  })

module.exports = router
