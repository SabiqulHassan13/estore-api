const USER_LIST = [];

exports.fetchUserList = (req, res) => {
  return res.status(200).json(USER_LIST);
};

exports.fetchUserDetail = (req, res) => {
  const { id: userId } = req.params;

  return res.status(200).json("fetch user detail " + userId);
};

exports.createUser = (req, res) => {
  const { username, email, password, c_password } = req.body;

  const newUser = {
    id: USER_LIST.length + 1,
    username,
    email,
    password,
  };

  USER_LIST.push(newUser);

  return res.status(201).json("user created");
};
