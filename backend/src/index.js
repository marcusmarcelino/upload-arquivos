require("dotenv").config();

const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

/**
 * DataBase  Setup
 */

mongoose.connect('mongodb+srv://uploadimage:uploadimage@cluster0-covbc.mongodb.net/uploadimage?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(routes);

app.listen(3000);