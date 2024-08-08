const express = require("express");
const { registerPage, loginPage, registerUser, loginUser, profilePage, logout, cartPage } = require("../controllers/auth-controller");
const {isLoggedIn} = require("../middlewares/isLoggedIn");
const upload = require("../config/multer");
const router = express.Router();


//register route
router.get("/", registerPage);

router.post("/register", registerUser)


//login route
router.get("/login", loginPage);

router.post("/login", loginUser);


//profile route
router.get("/profile", isLoggedIn, profilePage);


//cart route
router.get("/cart/:id", isLoggedIn, cartPage);


//logout route
router.get("/logout", isLoggedIn,  logout);


module.exports = router;