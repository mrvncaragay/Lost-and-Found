const User = require('../model/user');
const Organization = require('../model/organization');
const bcrypt = require('bcrypt');

// Property admins
exports.getPropAdmins = async (req, res, next) => {
  const { rowsPerPage, orgCode, adminType, propertyCode } = req.query;

  if (adminType === 'propAdmin' && propertyCode && orgCode) {
    const result = await User.find()
      .limit(parseInt(rowsPerPage, 10))
      .and([{ 'organization.organizationCode': orgCode }, { propertyCode }])
      .select('-password')
      .sort({ name: 1 });

    res.send({ result });
  } else {
    next();
  }
};

// Organization admins
exports.getOrgAdmins = async (req, res, next) => {
  const { rowsPerPage, orgCode, adminType } = req.query;

  if (adminType === 'orgAdmin' && orgCode) {
    const result = await User.find({ 'organization.organizationCode': orgCode })
      .limit(parseInt(rowsPerPage, 10))
      .select('-password')
      .sort({ name: 1 });

    res.send({ result });
  } else {
    next();
  }
};

// Software Admin
exports.getSoftwareAdminUsers = async (req, res) => {
  const result = await User.find()
    .select('-password')
    .sort({ name: 1 });

  res.send({ result });
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
  const org = await Organization.findById(req.body.organization);
  if (!org) return res.status(400).send('Invalid organization.');

  let { email, password, name, adminType, propertyCode } = req.body;

  const user = await User.findOne({ email });

  if (user && user.email === email) return res.status(400).send('Email is already registered.');

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    propertyCode,
    adminType,

    organization: {
      _id: org._id,
      organizationCode: org.organizationCode,
      name: org.name,
      address: org.address
    }
  });

  await newUser.save();

  res.send({
    name: newUser.name,
    email: newUser.email,
    adminType: newUser.adminType,
    propertyCode: newUser.propertyCode,
    organization: newUser.organization,
    status: newUser.status
  });
};

exports.updateUser = async (req, res) => {
  // const tempUser = await User.findOne({ email: req.body.email });
  // if (tempUser) return res.status(400).send('Email is already registered.');

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      adminType: req.body.adminType,
      propertyCode: req.body.propertyCode,
      organizationCode: newUser.organizationCode,
      status: req.body.status
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
