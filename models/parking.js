const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const parkingSchema = mongoose.Schema({
    
});


const Parking = module.exports = mongoose.model('Parking',parkingSchema);