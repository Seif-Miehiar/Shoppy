const Catagory = require('../models/catagory.model');

exports.create = async ( req, res ) => {
    const { catagory } = req.body;

    try {
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