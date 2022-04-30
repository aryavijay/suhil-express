var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var apiRoute = require('./routes/apiRoute');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(apiRoute)

app.use("/", (req, res) => {
  res.send({ msg: "Not Implemented" })
})

module.exports = app;
