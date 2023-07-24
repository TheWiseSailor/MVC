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
  secret: "Secret Secret Super",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
//You know what this does
const PORT = process.env.PORT || 3001;

//taken fromt he assignments in the bootcamp course just like connection.js
// Inform Express.js which template engine we're using
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
