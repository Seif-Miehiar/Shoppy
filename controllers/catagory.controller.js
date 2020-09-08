const Catagory = require('../models/catagory.model');

exports.create = async ( req, res ) => {
    const { catagory } = req.body;

    try {

      const catagoryExist = await Catagory.findOne({ catagory });

      if (catagoryExist){
        return res.status(400).json({
          errorMessage: `${catagory} was already exists!`
        })
      }

      let newCatagory = new Catagory();
      newCatagory.catagory = catagory;

      newCatagory = await newCatagory.save();

      res.status(200).json({
        successMessage: `${newCatagory.catagory} was created`
      })

    } catch (err) {
      console.log("create catagory error: ",err);
      res.status(500).json({
        errorMessage: "Please try again later"
      })
    }
}

exports.readAll = async ( req, res ) => {

  try {
    const catagories = await Catagory.find({});

    res.status(200).json({
      catagories: catagories
    })
  } catch (err) {
    console.log("Read all catagory error: ",err);
    res.status(500).json({
      errorMessage: "Please try again later"
    })
  }
}
