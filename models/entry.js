const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const entrySchema = mongoose.Schema({
    
});


const Entry = module.exports = mongoose.model('Entry',entrySchema);