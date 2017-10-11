
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Parking = require('../models/parking');

router.post('/rg', (req, res, next) => {
 
let newParking = new Parking({
    name: req.body.name,
    size: req.body.size,
    entracenumber : req.body.entracenumber,
    users: req.body.users
  });
  console.log(newParking);
  newParking.save(function(err, book) {
    if(err) {
      res.send('error saving book');
    } else {
      console.log(book);
      res.send(book);
    }
  });
});


module.exports = router;
