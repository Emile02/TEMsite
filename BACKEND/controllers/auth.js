require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model.js");
const Controller = require("../controllers/controller.js");


// login a user
exports.loginUser = async (req, res) => {
    try {
      const password = req.body.password;
  
      // Check if email and password are provided
      if (!password) {
        return res
          .status(400)
          .send({ message: "Email and password are required" });
      }      

      const user = await User.findOne({_id: "6577baf113f440e6e445c56d"});
      console.log("user", user);
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      console.log("password", password);
      console.log("user.password", user.password);

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).send({ message: "Password don't match" });
      }
  
      // generate JWT token
      const token = jwt.sign(
        { id: user._id},
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      
      res.status(200).send({ message: "Login successful", token });
    } catch (error) {
      res.status(500).send({ message: "Server error puto", error});
    }
  };