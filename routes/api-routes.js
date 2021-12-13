const express = require("express");

const UserApiController = require("../controllers/api/user-controller");

const router = express.Router();

router.get("/", UserApiController.hello);

module.exports = router;
