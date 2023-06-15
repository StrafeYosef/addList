// const loginUserModel = require("../models/loginUser");
const regUserModel = require("../models/registerUser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.loginCtrl = {
  async setUser(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ err: "Please fill all fields" });
      }

      let findUser = await regUserModel.findOne({ email });

      if (!findUser) {
        return res.status(400).json({ err: "User does not exist" });
      }

      let token = jwt.sign({ email }, process.env.SECRET, {
        expiresIn: "30d",
      });

      return res.status(200).json({ findUser, token });
    } catch (error) {
      console.log(error);
    }
  },
};
