const User = require('../model/user');

exports.getUsers = async (req, res) => {
  const result = await User.find()
    .select('-password')
    .sort('name');

  res.send(result);
};

exports.getCurrentUser = async (req, res) => {
  const result = await User.findById(req.user._id).select('-password');

  if (!result) return res.status(400).send('Invalid user.');

  res.send(result);
};

exports.postUser = async (req, res) => {};
