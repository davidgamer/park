
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Entrys = require('../models/entry');
const Tickets = require('../models/ticket');

router.post('/entry', (req, res, next) => {
 
let newticket = {
    name: req.body.name,
    status: req.body.status,
    code: req.body.code
  }

  new Tickets(newticket)
  .save()
  .then (Tickets => {
    console.log(newticket);
    res.send(newticket);
  });

});

router.get('/edit/:id', (req, res) => {
    Tickets.findOne({
    _id:req.params.id
  })
  .then(Tickets => {
    res.send(Tickets);
  });
});

router.put('/edit/:id', (req, res) => {
  
    Tickets.findOne({
  
        _id: req.params.id
  
    })
  
    .then( Parking => {
  
        Tickets.name = req.params.name;
    
  
        Tickets.save()
        .then( Entrys => {
  
          res.send(Entrys);
  
  
        }).catch(function (err) {
       console.log(err);
        });
    });
  });
  
  // Delete Idea
  router.delete('/:id', (req, res) => {
    Tickets.remove({_id: req.params.id})
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