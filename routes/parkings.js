
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Parking = require('../models/parking');

router.post('/rg', (req, res, next) => {
 
let newParking = {
    name: req.body.name,
    size: req.body.size,
    entracenumber : req.body.entracenumber,
    user: req.body.user
  }
/*
  newParking.save(function(err, park) {
    if(err) {
      res.send(err);
    } else {
      console.log(park);
     
    }
  });*/
  new Parking(newParking)
  .save()
  .then (Parking => {
    console.log(newParking);
    res.send(newParking);
  });

});


module.exports = router;
