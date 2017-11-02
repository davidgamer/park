
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Parking = require('../models/parking');
const Entrys = require('../models/entrys');

router.post('/rg', (req, res, next) => {
 
let newEntry = {
    name: req.body.name,
    parking: req.body.parking
  }

  new Parking(newParking)
  .save()
  .then (Entrys => {
    console.log(newEntry);
    res.send(newEntry);
  });

});

router.get('/edit/:id', (req, res) => {
  Entrys.findOne({
    _id:req.params.id
  })
  .then(Entrys => {
    res.send(Entrys);
  });
});

router.get('/all', (req, res) => {
  Entrys.find({})
    .then(Parking => { 
       res.send(Entrys);
    });
});

module.exports = router;