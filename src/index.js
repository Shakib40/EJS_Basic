const express = require("express");

const usersController = require("./controllers/user.controller");
const productsController = require("./controllers/product.controller");

const app = express();
app.use(express.json());

app.use(express.static("public"));

app.set("view engine", "ejs");



app.use("/users", usersController);
app.use("/products", productsController);


module.exports = app;

