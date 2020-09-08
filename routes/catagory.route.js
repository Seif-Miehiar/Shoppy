const express = require('express');
const router = express.Router();
const  catagoryController  = require("../controllers/catagory.controller");
const { authenticateJWT } = require('../middleware/authenticator');

router.post('/', authenticateJWT , catagoryController.create);


module.exports = router;
