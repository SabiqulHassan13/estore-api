const User = require("../models/user-model");

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

exports.createNewUser = async (req, res) => {
  const { username, email, password, c_password } = req.body;

  // add validation

  try {
    const user = await User.create({ username, email, password });

    return res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Create new user Failed",
    });
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
