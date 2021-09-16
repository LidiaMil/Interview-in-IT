const express = require('express');
const router = express.Router();
const {Organization} = require('../db/models')

router.get('/', (req, res) => {
  //  console.log( req.params.id)
    res.json(list)
  })
