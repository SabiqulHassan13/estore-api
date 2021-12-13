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

exports.getUserDetail = (req, res) => {
  const { id: userId } = req.params;

  const user = USER_LIST.find((user) => user.id === userId);

  //   return res.status(200).json("fetch user detail " + userId);
  return res.status(200).json(user);
};
