const Property = require('../model/property');
const Organization = require('../model/organization');

exports.index = async (req, res) => {
  const result = await Property.find().sort('name');

  res.send(result);
};

exports.getProperty = async (req, res) => {
  const prop = await Property.findById(req.params.id);
  if (!prop) return res.status(404).send('The property with the given ID was not found.');

  res.send(prop);
};

exports.postProperty = async (req, res) => {
  const org = await Organization.findById(req.body.organization);
  if (!org) return res.status(400).send('Invalid organization.');

  const prop = new Property({
    name: req.body.name,
    propertyCode: req.body.propertyCode,
    address: req.body.address,
    phone: req.body.phone,

    organization: {
      _id: org._id,
      propertyCode: org.propertyCode,
      name: org.name,
      address: org.address
    }
  });
  if (!prop) return res.status(400).send('Bad request.');

  await prop.save();

  res.send(prop);
};

exports.updateProperty = async (req, res) => {
  const org = await Organization.findById(req.body.organization);
  if (!org) return res.status(400).send('Invalid organization.');

  const prop = await Property.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      propertyCode: req.body.propertyCode,
      address: req.body.address,
      phone: req.body.phone,

      organization: {
        _id: org._id,
        propertyCode: org.propertyCode,
        name: org.name,
        address: org.address
      }
    },
    { new: true }
  );
  if (!prop) return res.status(404).send('The property with the given ID was not found.');

  res.send(prop);
};

exports.removeProperty = async (req, res) => {
  const prop = await Property.findByIdAndDelete(req.params.id);
  if (!prop) return res.status(404).send('The property with the given ID was not found.');

  res.send(prop);
};
