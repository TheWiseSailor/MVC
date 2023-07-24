//import path
const path = require("path");
//import express
const express = require("express");
//import express handlebars
const exphbs = require("express-handlebars");
//import the routes ./controllers
const routes = require("./controllers");
//import sequelize for connection.js
const sequelize = require("./config/connection");
//handlebar
const helpers = require("./utils/helpers");
//create anexpress app instance
const app = express();
//initializes for html
const hbs = exphbs.create({ helpers });
//super super secret stuff lol
const sesh = {
  secret,
};
//You know what this does
const PORT = process.env.PORT || 3001;
