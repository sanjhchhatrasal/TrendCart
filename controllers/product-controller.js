const productModel = require("../models/product");

module.exports.createProductPage = async (req, res) => {
    let success = req.flash("success");
    res.render("createProducts", {success});
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
    req.flash("success", "Product created successfully!")
    res.redirect("/profile");
    } catch(error){
        res.send(error.message);
        console.log(error.message)
    }
}