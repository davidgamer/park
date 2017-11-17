const mongoose = require('mongoose');
const config = require('../config/database');
const Parking = require('../models/parking');
const Schema = mongoose.Schema;


const entrySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
      },
     parking:[{ type: Schema.Types.ObjectId, ref: "Parking"}],

    created:{ type: Date, default: Date.now },
    modified:{ type: Date, default: Date.now }
});
const Entry = module.exports = mongoose.model('Entry',entrySchema);