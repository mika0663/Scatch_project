const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path');
const db = require("./configs/mongoose-connection");
const ownersRouter = require('./routes/ownersRouter');
const productsRouter = require('./routes/productRouter');
const usersRouter = require('./routes/usersRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);





const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))