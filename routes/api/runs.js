const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.send("this is run route");
});

module.exports = router;
