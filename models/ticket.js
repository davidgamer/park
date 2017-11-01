const mongoose = require('mongoose');
const config = require('../config/database');
const Entry = require('../models/entry');


const ticketSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
      },
      status:{
          type:string,
          require:true
      },
      code:{
            type:Number,
            required: true,
            unique: true
         },
         
    parking:[{ type: Schema.Types.ObjectId, ref: "Entry"}],
    created:{ type: Date, default: Date.now },
    modified:{ type: Date, default: Date.now }
    
});


const Ticket = module.exports = mongoose.model('Ticket', ticketSchema);