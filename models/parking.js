const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const parkingSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
      },
      size:{
          type:Number,
          required: true
      },
      entracenumber:{
        type:Number,
        required: true
      },
     created:{ type: Date, default: Date.now },
     modified:{ type: Date, default: Date.now }
});


const Parking = module.exports = mongoose.model('Parking',parkingSchema);