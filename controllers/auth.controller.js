const User = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpire } = require("../config/keys.config");

// sign up controller.
exports.signupController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    
    if (user) {
      return res.status(400).json({
        errorMessage: "Email already exists"
      });
    }

    const newUser = new User();
    newUser.username = username;
    newUser.email = email;

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt)
    
    await newUser.save();

    res.json({
      successMessage: "Registeration success, Please signin."
    })

  } catch (err) {
    console.log("signupController error: ", err);
    res.status(500).json({
      errorMessage: "server error"
    })
  }
}

// sign in controller.
exports.signinController = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        errorMessage: "Invalid credientials"
      })
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        errorMessage: "Invalid credientials"
      })
    }

    // payload
    const payload = {
      user: {
        _id: user.id
      }
    }

    jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire}, ( err, token ) => {
      if (err) {
        console.log("jwt error: ", err);
      } 
      const { _id, username, email, role } = user;

      res.json({
        token,
        user: { _id, username, email, role }
      })
    })

  } catch (err){
    console.log("signinController error", err);
    res.status(500).json({
      errorMessage: "server error"
    });
  }
}