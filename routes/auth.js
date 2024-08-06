const express = require("express");
const { registerPage, loginPage, registerUser, loginUser, profilePage } = require("../controllers/auth-controller");
const router = express.Router();


//register route
router.get("/", registerPage);

router. post("/register", registerUser)


//login route
router.get("/login", loginPage);

router.post("/login", loginUser);


//profile route
router.get("/profile", profilePage)


module.exports = router;