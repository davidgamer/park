const mongoose = require('mongoose');
const config = require('../config/database');

const entrySchema = mongoose.Schema({

    name:{
        type: String,
        required: true
      },

    created:{ type: Date, default: Date.now },
    modified:{ type: Date, default: Date.now }
});


const Entry = module.exports = mongoose.model('Entry',entrySchema);