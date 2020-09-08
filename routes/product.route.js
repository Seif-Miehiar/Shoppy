const express = require('express');
const router = express.Router();
const  productController  = require("../controllers/product.controller");
const { authenticateJWT } = require('../middleware/authenticator');

router.post('/', authenticateJWT , productController.create);

router.get('/', authenticateJWT, productController.readAll )


module.exports = router;
