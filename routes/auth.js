var AuthController = require("../controller/main");

const express = require("express");
const router = express.Router();
var validateResourceMW = require("../middleware/validateResource");
var userSchema = require("../schema/userSchema");

router.post("/signup", validateResourceMW(userSchema), AuthController.signUp);
router.post("/signin", AuthController.signIn);
module.exports = router;
