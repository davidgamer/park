const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config/database');

const parkingSchema = mongoose.Schema({
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
      users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
      created:{ type: Date, default: Date.now },
      modified:{ type: Date, default: Date.now }
});


const Parking = module.exports = mongoose.model('Parking',parkingSchema);

module.exports.addParking = function(newParking, callback){
    
    if(err) throw err;
        newParking.save(callback);
    
}