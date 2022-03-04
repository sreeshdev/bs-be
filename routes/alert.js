var AlertController = require("../controller/main.js");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
var alertSchema = require("../schema/alertSchema");
var validateResourceMW = require("../middleware/validateResource");
var jwtValidateResourceMW = require("../middleware/jwtValidator");
router.post(
  "/",
  jwtValidateResourceMW(),
  validateResourceMW(alertSchema),
  AlertController.postAlert
);
router.get("/", AlertController.getAllAlert);
router.put("/", AlertController.updateAlert);
router.delete("/", AlertController.deleteAlert);

module.exports = router;
