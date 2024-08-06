const userModel = require("../models/user");


//register controller
module.exports.registerPage = async (req, res) => {
    res.render("register");
};

module.exports.registerUser = async (req, res) => {

};



//login controller
module.exports.loginPage = async (req, res) => {
    res.render("login");
};

module.exports.loginUser = async (req, res) => {

};


//profile controller
module.exports.profilePage = async (req, res) => {
    res.render("profile");
}
