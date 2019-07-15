const User = require('../model/user');
const Property = require('../model/property');
const Organization = require('../model/organization');
const Lost = require('../model/lost');
const Found = require('../model/found');
const Inquiry = require('../model/inquiry');

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
  if (!req.user) return res.status(404).send('Unauthorized.');
  const { _id: propId, propertyCode: propCode } = req.user.property;

  const prop = Property.findById(propId);
  if (!prop) return res.status(404).send('The property with the given ID was not found.');

  const users = await User.find({ 'property.propertyCode': propCode })
    .select('-password -property')
    .sort({ name: 1 });

  const lost = await Lost.find({ propertyId: propId }).sort({ createdAt: -1 });
  const found = await Found.find({ propertyId: propId }).sort({ createdAt: -1 });
  const inquiry = await Inquiry.find({ propertyId: propId }).sort({ createdAt: -1 });

  res.send({ users, lost, found, inquiry });
};
