const User = require('../model/user');
const Property = require('../model/property');
const Organization = require('../model/organization');
const Lost = require('../model/lost')

exports.getOrgData = async (req, res, next) => {
  const { orgCode } = req.query;

  const users = await User.find()
    .or([
      { 'property.organization.organizationCode': orgCode },
      { 'property.propertyCode': orgCode }
    ])
    .select('-password -property')
    .sort({ name: 1 });

  const properties = await Property.find({ 'organization.organizationCode': orgCode })
    .select('-organization')
    .sort({ name: 1 });

  res.send({ users, properties });
};

exports.getPropData = async (req, res, next) => {
  const { propCode, id } = req.query;
  const prop = Property.findById(id);
  if (!prop) return res.status(404).send('The property with the given ID was not found.');

  const users = await User.find({ 'property.propertyCode': propCode })
    .select('-password -property')
    .sort({ name: 1 });

  const lost = await Lost.find({ 'propertyId': id }).sort({ createdAt: 1 })  

  res.send({ users, lost });
};
