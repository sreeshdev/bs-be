const User = require("../models/index.js").User;
const Alert = require("../models/index.js").Alert;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

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
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (result) {
        var token = jwt.sign({ user }, "batterySmaRT");
        res.status(200).json({ token, success: true });
      } else {
        res.status(401).send({
          message: "Incorrect Password",
        });
      }
    });
  });
};

exports.signUp = async function (req, res) {
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      res.status(400).send(err);
    }
    User.create({
      email: req.body.email,
      password: hash,
    })
      .then((user) => res.status(200).send(user))
      .catch((error) => {
        res.status(400).send(error);
      });
  });
};

exports.postAlert = async function (req, res) {
  Alert.create({
    name: req.body.name,
    criteria: req.body.criteria,
    value: req.body.value,
    days: req.body.days,
    email: req.body.email,
    phone: req.body.phone,
  })
    .then((alert) => res.status(200).send(alert))
    .catch((error) => {
      res.status(400).send(error);
    });
};
exports.getAllAlert = async function (req, res) {
  Alert.findAll()
    .then((alert) => res.status(200).send(alert))
    .catch((error) => {
      res.status(400).send(error);
    });
};
exports.updateAlert = async function (req, res) {
  console.log(req.body);
  Alert.update(
    {
      name: req.body.name,
      criteria: req.body.criteria,
      value: req.body.value,
      days: req.body.days,
      email: req.body.email,
      phone: req.body.phone,
    },
    { where: { id: req.body.id } }
  )
    .then((alert) => res.status(200).send(alert))
    .catch((error) => {
      res.status(400).send(error);
    });
};
exports.deleteAlert = async function (req, res) {
  console.log(req.body.id);
  Alert.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((alert) => res.status(200).send({ message: "deleted" }))
    .catch((error) => {
      res.status(400).send(error);
    });
};
