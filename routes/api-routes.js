const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World from api routes");
});

module.exports = router;
