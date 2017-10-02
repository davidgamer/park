const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const ticketSchema = mongoose.Schema({
    
});


const Ticket = module.exports = mongoose.model('Ticket', ticketSchema);