const express = require("express");
const signup = require("../routes/signup");
const signin = require("../routes/signin");
const token = require("../routes/token")


module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/signup", signup);
  app.use("/api/signin", signin);
  app.use("/api/token", token);
};
