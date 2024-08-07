const express = require("express");
const { createProduct, createProductPage } = require("../controllers/product-controller");
const { isLoggedIn } = require("../middlewares/isLoggedIn");
const upload = require("../config/multer");
const router = express.Router();

router.get("/", isLoggedIn, createProductPage);

router.post("/create", isLoggedIn, upload.single("productimg"), createProduct)

module.exports = router;