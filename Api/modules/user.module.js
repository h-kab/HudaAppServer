const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String , required:true , unique:true},
  password:String,
});

const userModule = 
  mongoose.model("user",userSchema );

module.exports = userModule; 

