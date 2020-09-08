const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productImage: {
    data: Buffer,
    contentType : String
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