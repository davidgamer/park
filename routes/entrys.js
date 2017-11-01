
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
    user: req.body.user
  }

  new Parking(newParking)
  .save()
  .then (Parking => {
    console.log(newParking);
    res.send(newParking);
  });

});

router.get('/edit/:id', (req, res) => {
  Parking.findOne({
    _id:req.params.id
  })
  .then(Parking => {
    res.send(Parking);
  });
});

router.get('/all', (req, res) => {
  Parking.find({})
    .then(Parking => { 
       res.send(Parking);
    });
});



module.exports = router;



/*
  newParking.save(function(err, park) {
    if(err) {
      res.send(err);
    } else {
      console.log(park);
     
    }
  });*/


