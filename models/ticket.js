const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const ticketSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
      },
      code:{
        type:Number,
        required: true,
        unique: true
         },
    created:{ type: Date, default: Date.now },
    modified:{ type: Date, default: Date.now }
    
});


const Ticket = module.exports = mongoose.model('Ticket', ticketSchema);