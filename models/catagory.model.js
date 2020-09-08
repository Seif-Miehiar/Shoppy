const mongoose = require('mongoose');

const catagorySchema = new mongoose.Schema({
  catagory: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  }
}, { timestamps: true});

const Catagory = mongoose.model('Catagory', catagorySchema)


module.exports = Catagory;