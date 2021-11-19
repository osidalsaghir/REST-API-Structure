const mongoose = require("mongoose");


  const Cat = mongoose.Schema({
    title:  String, // String is shorthand for {type: String}
    
  });

  module.exports = mongoose.model("Cat",Cat);