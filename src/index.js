"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.send("Bem Vindo");
});
app.listen(3333);
