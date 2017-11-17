
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Parking = require('../models/parking');
const Entrys = require('../models/entry');

router.post('/entry', (req, res, next) => {
 
let newEntry = {
    name: req.body.name,
    parking: req.body.parking
  }

  new Entrys(newEntry)
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

router.put('/edit/:id', (req, res) => {
  
  Entrys.findOne({
  
        _id: req.params.id
  
    })
  
    .then( Parking => {
  
      Entrys.name = req.params.name;
    
  
      Entrys.save()
        .then( Entrys => {
  
          res.send(Entrys);
  
  
        }).catch(function (err) {
       console.log(err);
        });
    });
  });
  
  // Delete Idea
  router.delete('/:id', (req, res) => {
    Parking.remove({_id: req.params.id})
      .then(() => {
       // res.send(Parking);
        console.log("deletado!!");
      });
  });
  
  module.exports = router;






router.get('/all', (req, res) => {
  Entrys.find({})
    .then(Parking => { 
       res.send(Entrys);
    });
});

module.exports = router;