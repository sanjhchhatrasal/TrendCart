const productModel = require("../models/product");

module.exports.createProductPage = async (req, res) => {
    res.render("createProducts");
}

module.exports.createProduct = async (req, res) => {
    try{
        let {productimg, productPrice, discountedPrice, productName, bgColor,panelColor,  textColor } = req.body
    const product = await productModel.create({
        name: productName,
        price: productPrice,
        discountedPrice,
        panelColor,
        bgColor,
        textColor,
        productPic: req.file.buffer
    })
    console.log(product)
    res.redirect("/profile");
    } catch(error){
        console.log(error.message)
    }
}