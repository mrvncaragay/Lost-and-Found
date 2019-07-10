const User = require('../model/user');
const Property = require('../model/property');
const Organization = require('../model/organization');

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
