const express = require('express');
const router = express.Router();
const {Organization} = require('../db/models')

router.get('/', async (req, res) => {
  //  console.log( req.params.id)
  const organization = await Organization.findAll() 
  console.log(organization)
    res.json(organization)
  })

module.exports = router
