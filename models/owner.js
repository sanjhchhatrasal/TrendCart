const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: Buffer
    },
   products :[],
   gstin: String
});

module.exports = mongoose.model("Owner", ownerSchema);