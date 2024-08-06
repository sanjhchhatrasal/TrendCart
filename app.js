const express = require("express");
const path = require("path");
const app = express();
const authRouter = require("./routes/auth");
const db = require("./config/mongoose-connection");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", authRouter)

app.listen(3000);