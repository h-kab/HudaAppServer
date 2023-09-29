const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  id:String,
  name: String,
  price: Number,
  img:String,
  // categories: { type: [String], default: ["general"] },
});

const productModule = 
    mongoose.model("product", productSchema);

module.exports = productModule;