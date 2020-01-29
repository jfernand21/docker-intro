const mongoose= require("mongoose");
const CharactersSchema = new mongoose.Schema({
    page: { type: String, unique: true } , 
    data  : {type: String},
    registrationDate: {type: Date, default: Date.now}
  
  },{
    versionKey:false
  });  

  module.exports = mongoose.model('Characters', CharactersSchema);