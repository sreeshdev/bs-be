const express = require("express");
const signup = require("./auth");
const alert = require("./alert");

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/user", signup);
  app.use("/api/alert", alert);
};
