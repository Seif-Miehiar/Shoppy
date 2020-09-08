const Product = require('../models/product.model');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


exports.create = async ( req, res ) => {
  console.log(req.body)
    const { 
      productImage, 
      productName, 
      productDescription, 
      productCatagory, 
      productPrice 
    } = req.body;

    try {

      const productExist = await Product.findOne({ 
        productImage, 
        productName, 
        productDescription, 
        productCatagory, 
        productPrice 
      });

      if (productExist){
        return res.status(400).json({
          errorMessage: `${product} was already exists!`
        })
      }

      let newProduct = new Product();
      newProduct.product = { 
        productImage, 
        productName, 
        productDescription, 
        productCatagory, 
        productPrice 
      };

      newProduct = await newProduct.save();

      res.status(200).json({
        successMessage: `${newProduct.product} was created`
      })

    } catch (err) {
      console.log("create product error: ",err);
      res.status(500).json({
        errorMessage: "Please try again later"
      })
    }
}

exports.readAll = async ( req, res ) => {

  try {
    const products = await Product.find({});

    res.status(200).json({
      products: products
    })
  } catch (err) {
    console.log("Read all products error: ",err);
    res.status(500).json({
      errorMessage: "Please try again later"
    })
  }
}
