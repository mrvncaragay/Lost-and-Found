const User = require('../model/user');
const Organization = require('../model/organization');
const Property = require('../model/property');
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
  console.log(req.query);
  if (adminType === 'orgAdmin' && orgCode) {
    const result = await User.find()
      .or([{ 'property.organization.organizationCode': orgCode }])
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

exports.postUser = async (req, res, next) => {
  let { email, password, name, adminType, propertyCode, organization, property = null } = req.body;
  let prop;

  // check for property
  if (property) {
    prop = await Property.findById(property);
    if (!prop) return res.status(400).send('Invalid property.');
  }

  const org = await Organization.findById(organization);
  if (!org) return res.status(400).send('Invalid organization.');

  const user = await User.findOne({ email });

  if (user && user.email === email) return res.status(400).send('Email is already registered.');

  const hashedPassword = await bcrypt.hash(password, 12);

  // if no property assigned it to organization
  if (!prop) {
    prop = {
      name: org.name,
      propertyCode: org.organizationCode,
      address: org.address,
      phone: 'xxx-xxx-xxx'
    };
  }

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    propertyCode,
    adminType,

    property: {
      ...prop,
      organization: { ...org }
    }
  });

  await newUser.save();

  res.send({
    name: newUser.name,
    email: newUser.email,
    adminType: newUser.adminType,
    propertyCode: prop.propertyCode,
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
      status: req.body.status
    },
    { new: true }
  ).select('-password');
  if (!user) return res.status(404).send('The user with the given ID was not found.');

  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    adminType: user.adminType,
    propertyCode: user.propertyCode,
    organization: user.organization,
    status: user.status
  });
};

exports.removeUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id).select('-password');

  if (!user) return res.status(404).send('The user with the given ID was not found.');

  res.send(user);
};
