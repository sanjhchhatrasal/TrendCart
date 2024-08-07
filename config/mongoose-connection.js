const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose");

mongoose
.connect(`${config.get("MONGODB_URI")}/TrendCartBackend`)
.then(function(){
    dbgr("connected to db from dbgr");
})
.catch(function(err){
    dbgr("databse error -", err);
})

const db = mongoose.connection

module.exports = db ;