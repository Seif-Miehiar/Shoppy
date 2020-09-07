const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
  console.log("you are inside signup controller")
})

module.exports = router;