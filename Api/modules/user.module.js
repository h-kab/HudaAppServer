const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String , required:true , unique:true},
  password:String,
  FirstName :String,
LastName:String,
Gender:String,


});

const userModule = 
  mongoose.model("user",userSchema );
//model onect betweb server and db 
module.exports = userModule; 

