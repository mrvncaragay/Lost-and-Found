const User = require('../model/user');
const bcrypt = require('bcrypt');

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

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (!user) return res.status(404).send('The user with the given ID was not found.');

  res.send(user);
};

exports.postUser = async (req, res) => {
  let newUser = req.body;

  res.status(200);
  const user = await User.findOne({ email: newUser.email });
  if (user) return res.status(400).send('User already registered.');

  const hashedPassword = await bcrypt.hash(newUser.password, 12);
  newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    adminType: req.body.adminType
  });

  newUser.save();

  res.header('x-auth-token', newUser.jwtToken).send({
    name: newUser.name,
    email: newUser.email,
    adminType: newUser.adminType
  });
};

exports.updateUser = async (req, res) => {
  const adminEmail = await User.findOne({ email: req.body.email });
  if (adminEmail) return res.status(400).send('Email is already registered.');

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      adminType: req.body.adminType,
      propertyCode: req.body.propertyCode
    },
    { new: true }
  ).select('-password');
  if (!user) return res.status(404).send('The user with the given ID was not found.');

  res.send(user);
};

exports.removeUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id).select('-password');

  if (!user) return res.status(404).send('The user with the given ID was not found.');

  res.send(user);
};
