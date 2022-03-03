const User = require("../models/index.js").User;

const jwt = require("jsonwebtoken");

exports.signIn = async function (req, res) {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (!user) {
      res.status(401).send({
        message: "Authentication failed. User not found.",
      });
    }
    if (user.password !== req.body.password) {
      res.status(401).send({
        message: "Incorrect Password",
      });
    } else {
      res.status(200).json({ success: true });
    }
  });
};

exports.signUp = async function (req, res) {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({ msg: "Please pass email and password." });
  } else {
    User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => res.status(200).send(user))
      .catch((error) => {
        res.status(400).send(error);
      });
  }
};
