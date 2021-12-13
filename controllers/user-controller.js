// const USER_LIST = [];
const User = require("../models/user-model");

exports.createUser = async (req, res) => {
  const { username, email, password, c_password } = req.body;

  // add validation

  try {
    const user = await User.create({ username, email, password });

    return res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    return res.json(err);
  }
};

exports.getUserList = async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (err) {
    return res.json(err);
  }
};

exports.getUserDetail = async (req, res) => {
  const { id: userId } = req.params;

  try {
    const user = await User.findAll({
      where: {
        id: userId,
      },
    });

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "Not Found" });
    }
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

exports.updateUser = async (req, res) => {
  const { id: userId } = req.params;

  try {
    const user = await User.findAll({
      where: {
        id: userId,
      },
    });

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "Not Found" });
    }
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

exports.deleteUser = async (req, res) => {
  const { id: userId } = req.params;

  try {
    const user = await User.destroy({
      where: {
        id: userId,
      },
    });

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "Not Found" });
    }
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};
