const mongoose = require("mongoose");
const User = require("../models/user.model");

const firstController = async (req, res) => {
  res.send("Hello user routes");
};
const userRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    return res.status(400).send("User already exist");
  }
  console.log(firstName, lastName, email, password);

  console.log(req.file);

  const profileLocalPath = req.file.path;

  console.log(profileLocalPath);

  if (!profileLocalPath) {
    return res.status(400).send("User profile image is required");
  }
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    profileImage: profileLocalPath,
  });
  return res
    .render("registeredsuccessfully");
  //   return res.json("user registered successfully");
};
const userRegisterUI = async (req, res) => {
  res.render("registerpage");
};

module.exports = { firstController, userRegister, userRegisterUI };
