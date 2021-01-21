const User = require("../models").User;
const Token = require("../models").Token;
const jwt = require("jsonwebtoken");

exports.signIn = async function (req, res) {
  Token.findOne({
    where: {
      id: req.body.token.id
    }
  }).then(token => {
    let now = new Date().getTime();
    if (now > parseInt(token.expire_time)) {
      res.status(200).send({
        message: "Token TimeOut"
      });
    } else {
      User.findOne({
        where: {
          username: req.body.username
        }
      }).then(user => {
        if (!user) {
          res.status(200).send({
            message: "Authentication failed. User not found."
          });
        }
        if (user.password !== req.body.password) {
          res.status(200).send({
            message: "Incorrect Password"
          });
        } else {
          res.status(201).json({ success: true });
        }
      })
    }
  }).catch(error => res.status(400).send(error));
};

exports.signUp = async function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(200).send({ msg: "Please pass username and password." });
  } else {
    User.create({
      username: req.body.username,
      password: req.body.password,
    })
      .then(user => res.status(201).send(user))
      .catch(error => {
        res.status(400).send(error);
      });
  }
};

exports.tokenGenerate = async function (req, res) {
  var token = jwt.sign({ type: "loginToken" }, "nodeauthsecret");
  var now = new Date();
  var expire_time = (now.getTime() + 5 * 60000).toString();
  Token.create({
    token,
    expire_time
  })
    .then(user => res.status(201).send(user))
    .catch(error => {
      res.status(400).send(error);
    });
};