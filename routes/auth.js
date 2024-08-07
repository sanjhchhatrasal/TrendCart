const express = require("express");
const { registerPage, loginPage, registerUser, loginUser, profilePage, logout } = require("../controllers/auth-controller");
const {isLoggedIn} = require("../middlewares/isLoggedIn");
const router = express.Router();


//register route
router.get("/", registerPage);

router.post("/register", registerUser)


//login route
router.get("/login", loginPage);

router.post("/login", loginUser);


//profile route
router.get("/profile", isLoggedIn, profilePage);


//logout route
router.get("/logout", isLoggedIn,  logout);


module.exports = router;