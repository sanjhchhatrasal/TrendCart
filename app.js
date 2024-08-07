const express = require("express");
const path = require("path");
const app = express();
const db = require("./config/mongoose-connection");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const flash = require("connect-flash");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");

require("dotenv").config();


app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET
}));
app.use(flash());


app.use("/", authRouter);
app.use("/product", productRouter);

app.listen(3000);