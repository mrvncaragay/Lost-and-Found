const Admin = require('../model/admin');
const bcrypt = require('bcrypt');

exports.getAdmins = async (req, res) => {
  const result = await Admin.find()
    .select('-password')
    .sort('name');

  res.send(result);
};

exports.getCurrentAdmin = async (req, res) => {
  const result = await Admin.findById(req.admin._id).select('-password');

  if (!result) return res.status(400).send('Invalid admin.');

  res.send(result);
};

exports.getAdmin = async (req, res) => {
  const admin = await Admin.findById(req.params.id).select('-password');
  if (!admin) return res.status(404).send('The admin with the given ID was not found.');

  res.send(admin);
};

exports.postAdmin = async (req, res) => {
  let newAdmin = req.body;

  res.status(200);
  const admin = await Admin.findOne({ email: newAdmin.email });
  if (admin) return res.status(400).send('Admin already registered.');

  const hashedPassword = await bcrypt.hash(newAdmin.password, 12);
  newAdmin = new Admin({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    adminType: req.body.adminType,
    propertyCode: req.body.propertyCode
  });

  newAdmin.save();

  res.header('x-auth-token', newAdmin.jwtToken).send({
    name: newAdmin.name,
    email: newAdmin.email,
    adminType: newAdmin.adminType
  });
};

exports.updateAdmin = async (req, res) => {
  const adminEmail = await Admin.findOne({ email: req.body.email });
  if (adminEmail) return res.status(400).send('Email is already registered.');

  const admin = await Admin.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      adminType: req.body.adminType,
      propertyCode: req.body.propertyCode
    },
    { new: true }
  ).select('-password');
  if (!admin) return res.status(404).send('The admin with the given ID was not found.');

  res.send(admin);
};

exports.removeAdmin = async (req, res) => {
  const admin = await Admin.findByIdAndDelete(req.params.id).select('-password');

  if (!admin) return res.status(404).send('The admin with the given ID was not found.');

  res.send(admin);
};
