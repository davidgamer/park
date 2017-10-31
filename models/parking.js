const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config/database');
const user = require('../models/user');

const parkingSchema = mongoose.Schema({ 
   // _id     : Schema.Types.ObjectId,
    name:{
        type: String,
        required: true
      },
      //quantidade de veiculo que cabe la seu jumento!!!
      size:{
          type:Number,
          required: true
      },
      entracenumber:{
        type:Number,
        required: true
      },
      user:[{ type: Schema.Types.ObjectId, ref: "User"}],
      created:{ type: Date, default: Date.now },
      modified:{ type: Date, default: Date.now }
});


const Parking = module.exports = mongoose.model('Parking',parkingSchema);

module.exports.addParking = function(newParking, callback){

    
    if(err) throw err;
    
        console.log("Estacionamento Salvo!!!");
        console.log("\n\n"); 
            newParking.save(callback + "\n\n");
        console.log();
        console.log("Estacionamento Salvo!!!");
    
}