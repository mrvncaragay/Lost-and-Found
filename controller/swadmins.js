const User = require('../model/user');
const Property = require('../model/property');
const Organization = require('../model/organization');

exports.getOrgData = async (req, res, next) => {
  const { orgCode } = req.query;

  const users = await User.find({ 'organization.organizationCode': orgCode })
    .select('-password -_id -organization.address -organization._id')
    .sort({ name: 1 });

  const properties = await Property.find({ 'organization.organizationCode': orgCode })
    .select('-password -_id -organization.address -organization._id')
    .sort({ name: 1 });

  res.send({ users, properties });
};



