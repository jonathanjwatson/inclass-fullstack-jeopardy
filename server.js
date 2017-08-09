require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(POR, () => {
    console.log("App is listening on: " + PORT);
})

