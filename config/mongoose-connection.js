const mongoose = require("mongoose");

 const db = mongoose.connect("mongodb://127.0.0.1:27017/ecoomerceBackend")
.then(function(){
    console.log("connected to db")
})
.catch(function(err){
    console.log("databse error -", err);
})

module.exports = db;