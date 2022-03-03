var AuthController = require("../controller/main.js");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", AuthController.signIn);

module.exports = router;
