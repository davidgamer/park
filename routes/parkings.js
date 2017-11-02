
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

router.put('/edit/:id', (req, res) => {
  Parking.findOne({
    _id: req.params.id
  })
  .then(Parking => {
    Parking.name =  req.body.name;
    Parking.size =  req.body.size;
    Parking.entracenumber = req.body.entracenumber;
  
    Parking.save()
      .then(Parking => {
      res.send(Parking);
      });
  });
});

// Delete Idea
router.delete('/:id', (req, res) => {
  Parking.remove({_id: req.params.id})
    .then(() => {
     // res.send(Parking);
      console.log("rodou!!");
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


