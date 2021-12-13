const USER_LIST = [];

exports.fetchUserList = (req, res) => {
  return res.status(200).json("fetch user list");
};

exports.fetchUserDetail = (req, res) => {
  const { id: userId } = req.params;

  return res.status(200).json("fetch user detail " + userId);
};

exports.createUser = (req, res) => {
  const { username, email, password, c_password } = req.body;

  const newUser = {
    username,
    email,
    password,
  };

  USER_LIST.push(newUser);

  return res.status(201).json("user created");
};
