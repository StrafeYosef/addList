const regUserModel = require("../models/registerUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.registerCtrl = {
  async setUser(req, res) {
    const { email, name, password } = req.body;

    try {
      if (!email || !name || !password) {
        res.status(400).json({ err: "Please fiil fields." });
      }

      let uniqueName = await regUserModel.countDocuments({ name });

      if (uniqueName > 1) {
        res.status(400).json({ err: "The name you chose is already taken." });
      }

      if (password.length < 9) {
        res
          .status(400)
          .json({ err: "Password must be longer than 8 characters." });
      }
     
      let protectedPassword = await bcrypt.hash(password, 10);

      let createdUser = await regUserModel.create({
        email,
        name,
        password: protectedPassword,
        token,
      });

      res.status(200).json(createdUser);
    } catch (error) {
      console.log(error);
    }
  },
  async getUsers(req, res) {
    try {
      const users = await regUserModel.find({});
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Internal server error" });
    }
  },
};
