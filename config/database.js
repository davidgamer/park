const mongoose = require('mongoose');
const dburl = 'mongodb://app:1014@ds161793.mlab.com:61793/park';
var retry = null;
const secret = 'your secret';
const User =  require('../models/user');


const config = module.exports = {  
  
  database: dburl,
  secret: 'yoursecret'
   //database: 'mongodb://localhost:27017/estaciona',    //desenvolvimento
}

mongoose.connect(config.database);


mongoose.connection.on('connected', function() {
  console.log('Mongoose connectado com: ' + dburl);
});
mongoose.connection.on('error', function(err) {
  console.log('Erro =>: ' + err+ '\n');
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose desconectado');
});




// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
function gracefulShutdown(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
}

// For nodemon restarts
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', function() {
  gracefulShutdown('App termination (SIGINT)', function() {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', function() {
  gracefulShutdown('App termination (SIGTERM)', function() {
    process.exit(0);
  });

  
});

// BRING IN YOUR SCHEMAS & MODELS
