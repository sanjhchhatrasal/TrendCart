const mongoose = require("mongoose");
const product = require("./product");


const addressSchema = mongoose.Schema({
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pinCode: {
        type: Number,
        required: true
    },
    houseNumber: {
        type: String,
        required: true
    }
})


const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        required: true
    },
    username: {
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
   
    address: addressSchema,
    profilePic: {
        type: Buffer,
        default: "default.jpg"
    },
    cart: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ],
    orderItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
});

module.exports = mongoose.model("User", userSchema);