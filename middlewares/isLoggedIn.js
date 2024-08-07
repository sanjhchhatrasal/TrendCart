const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

module.exports.isLoggedIn = async function(req, res, next){
    if(!req.cookies.token){
        req.flash("error", "You need to login first");
        return res.redirect("/")
    };

    try{
        const data = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
        let user =  await userModel.findOne({email: data.email}).select("-password");
        req.user = data;
        next()

    } catch(err){
        req.flash("error", "something went wrong")
        console.log(err.message);
    };
}