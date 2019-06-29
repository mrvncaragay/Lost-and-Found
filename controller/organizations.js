const Organization = require('../model/organization');

exports.index = async (req, res) => {
  const result = await Organization.find()
    .limit(10)
    .sort({ name: 1 });

  const count = await Organization.find().countDocuments();

  res.send({ result, count });
};

exports.searchOrganizations = async (req, res) => {
  const regx = `^${req.query.params}`;
  const result = await Organization.find({ name: new RegExp(regx, 'i') });
  if (!orgs) return res.status(404).send('No organizations found.');

  res.send(result);
};

exports.getOrganization = async (req, res) => {
  const org = await Organization.findById(req.params.id);
  if (!org) return res.status(404).send('The organization with the given ID was not found.');

  res.send(org);
};

exports.postOrganization = async (req, res) => {
  const org = new Organization({
    name: req.body.name,
    propertyCode: req.body.propertyCode,
    address: req.body.address
  });
  if (!org) return res.status(400).send('Bad request.');

  await org.save();

  res.send(org);
};

exports.updateOrganization = async (req, res) => {
  const org = await Organization.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      propertyCode: req.body.propertyCode,
      address: req.body.address
    },
    { new: true }
  );
  if (!org) return res.status(404).send('The organization with the given ID was not found.');

  res.send(org);
};

exports.removeOrganization = async (req, res) => {
  const org = await Organization.findByIdAndDelete(req.params.id);
  if (!org) return res.status(404).send('The organizaton with the given ID was not found.');

  res.send(org);
};
