
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Parking = require('../models/parking');

router.post('/new', (req, res, next) => {

let newParking = new Parking({

    name: req.body.name,
    size: req.body.size,
    entracenumber : req.body.entracenumber,
    users: req.body.users
  });

  /*Parking.addParking(newParking, (err, user) => {
    if(err){
      res.json({success: false, msg:'Falha ao registrar usuario'});
    } else {
      res.json({success: true, msg:'Usuario registrado'});
    }
  });*/
 

});
module.exports = router;
