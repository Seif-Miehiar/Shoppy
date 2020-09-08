const express = require('express');
const router = express.Router();
const { catagoryController } = require("../controllers/catagory");

router.post('/', catagoryController);


module.exports = router;
