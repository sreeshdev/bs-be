const User = require("../models/index.js").User;

const jwt = require("jsonwebtoken");

exports.signIn = async function (req, res) {
  User.findOne({
    where: {
      username: req.body.username,
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
  if (!req.body.username || !req.body.password) {
    res.status(400).send({ msg: "Please pass username and password." });
  } else {
    User.create({
      username: req.body.username,
      password: req.body.password,
    })
      .then((user) => res.status(200).send(user))
      .catch((error) => {
        res.status(400).send(error);
      });
  }
};
