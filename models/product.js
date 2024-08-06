const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: String,
        default: 0
    },
    panelColor: {
        type: String
    },
    bgColor: {
        type: String
    },
    productPic: {
        type: Buffer
    }
})

module.exports = mongoose.model("Product", productSchema);