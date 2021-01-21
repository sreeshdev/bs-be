var AuthController = require("../controller/auth");
const express = require("express");
const router = express.Router();

router.get("/", AuthController.tokenGenerate);

module.exports = router;
