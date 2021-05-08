const googleController = require("../../controllers/googleController");
const router = require("express").Router();
const axios = require("axios");


router
  .route("/")
  .get(googleController.findAll);

module.exports = router;