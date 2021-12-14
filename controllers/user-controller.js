const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user-model");

exports.createNewUser = async (req, res) => {
  const { username, email, password, c_password } = req.body;

  // add validation

  try {
    // check if user exist
    const userFound = await User.findOne({ where: { email } });

    // if found previous user then 400
    if (userFound) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // otherwise hash password then
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user
    const user = { username, email, password: hashedPassword };
    const newUser = await User.create(user);

    return res
      .status(201)
      .json({ message: "User created successfully", newUser });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Create new user Failed",
    });
  }
};

exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    if (users === null) {
      return res.status(404).json({ message: "Users not found", users });
    }

    return res.status(200).json({ users });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.findUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ where: { id } });

    if (user === null) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.updateUserById = async (req, res) => {
  const { id } = req.params;

  // add validation

  try {
    const user = await User.update(req.body, { where: { id } });

    if (user == 1) {
      return res.status(200).json({ message: "User updated successfully" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.deleteUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.destroy({ where: { id } });

    if (user == 1) {
      return res.status(200).json({ message: "User deleted successfully" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
