const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const tokenGenerator = require("../utils/tokenGenerator");


//register controller
module.exports.registerPage = async (req, res) => {
    let error = req.flash("error");
    res.render("register", {error});
};

module.exports.registerUser = async (req, res) => {
   try{
    let {fullname, username, email, contact, password} = req.body;
    let user = await userModel.findOne({email});
    if(user) {
        req.flash("error", "User already exists, please log in.");
        return res.status(500).redirect("/login")
    };

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);

      user = await userModel.create({
        fullname,
        username,
        email,
        contactNumber: contact,
        password: hash
    });
    let token = tokenGenerator({email: email, id: user._id});
    res.cookie("token", token);
    res.redirect("/profile");
   } catch(error){
    req.flash("error", "An error occurred during registration.");
    console.log(error.message)
   }
};



//login controller
module.exports.loginPage = async (req, res) => {
    let error = req.flash("error");
    res.render("login", {error});
};

module.exports.loginUser = async (req, res) => {
   try{
    let { email, password} = req.body;
    let  user = await userModel.findOne({email});
    if(!user) {
        req.flash("error", "User not found.");
        return res.status(500).redirect("/")

    };

   let securedPassword = await bcrypt.compare(password, user.password);
   if(securedPassword){
    let token = tokenGenerator({email: email, id: user._id});
    res.cookie("token", token);
    res.redirect("/profile");
   } else{
    req.flash("error", "Incorrect password.");
    res.redirect("/login")
   }
   } catch(error){
    req.flash("error", "An error occurred during login.");
    console.log(error.message);
   }

   
};


//profile controller
module.exports.profilePage = async (req, res) => {
    res.render("profile");
}


//logout controller
module.exports.logout = async (req, res) => {
    res.cookie("token", "");
    res.redirect("/login")
}
