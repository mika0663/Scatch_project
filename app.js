

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path');
const db = require("./config/mongoose-connection");
const ownersRouter = require('./routes/ownersRouter');
const productsRouter = require('./routes/productRouter');
const usersRouter = require('./routes/usersRouter');
const index = require('./routes/index');
const flash = require("connect-flash");
const expressSession = require("express-session");

require("dotenv").config();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use( expressSession({
        resave: false,
        saveUninitialized: true,
        secret: process.env.EXPRESS_SESSION_SECRET,
        cookie: { secure: false }
    }));

app.use(flash());
app.set("view engine", "ejs");
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);
app.use("/", index);





app.listen(3000);