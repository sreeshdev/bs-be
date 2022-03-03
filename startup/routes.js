const express = require("express");
const signup = require("../routes/signup");
const signin = require("../routes/signin");

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/signup", signup);
  app.use("/api/signin", signin);
};
