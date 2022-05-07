process.env.NODE_ENV = process.argv[2] || 'vj'
const path =  require('path')
const dotenv = require('dotenv')
const envPATH = path.resolve(__dirname, "source", "env", `${process.env.NODE_ENV}.env`)
dotenv.config({path:envPATH})

console.log(process.env.NAME)
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { errorHandler } = require('./source/custom_lib/errorHandler')

const apiRoute = require('./routes/apiRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(apiRoute)

app.use("/", (req, res) => {
  res.send({ msg: "Not Implemented" })
})


app.use(errorHandler)

module.exports = app;
