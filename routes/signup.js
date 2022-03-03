var AuthController = require("../controller/main");

const express = require("express");
const router = express.Router();
var validateResourceMW = require("../middleware/validateResource");
var userSchema = require("../schema/userSchema");

router.post("/", validateResourceMW(userSchema), AuthController.signUp);

module.exports = router;
