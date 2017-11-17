
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Parking = require('../models/parking');

router.post('/new', (req, res, next) => {
 
let newParking = {
    name: req.body.name,
    size: req.body.size,
    entracenumber : req.body.entracenumber,
    user: req.body.user
  }

  new Parking(newParking)
  .save()
  .then (Parking => {

    res.json({success: true, msg:'Estacionamento Registrado'});
    
  }).catch(function (err) {
   
    res.json({success: false, msg:'Falha ao registrar'});

   });

});

router.get('/all', (req, res) => {
  Parking.find({})
    .then(Parking => { 
       res.send(Parking);
    });
});

router.get('/edit/:id', (req, res) => {
  Parking.findOne({
    _id:req.params.id
  })
  .then( Parking => {
 
    res.send('/edit/',{
      Parking:Parking  
         
    }).catch(function (err) {
      // console.log(err);
       console.log(req.params);
      
     });
     console.log(Parking.findOne);
  });
});

router.put('/edit/:id', (req, res) => {

  Parking.findOne({

      _id: req.params.id

  })

  .then( Parking => {

    Parking.name = req.params.name;
    Parking.size = req.params.size;
    Parking.entracenumber = req.params.entracenumber;

    Parking.save()
      .then( Parking => {

        res.send(Parking);


      }).catch(function (err) {
       // console.log(err);
        console.log(req.params);
        console.log(Parking.findOne);
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