const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productImage: {
    meta_data:{}
  },
  productName: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    required: true,
    maxlength: 75
  },
  productCatagory: {
    type: String,
    required: true
  },
  productPrice: {
    type: String,
    required:true
  }
}, { timestamps: true});

const Product = mongoose.model('Product', productSchema)


module.exports = Product;