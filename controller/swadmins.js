const User = require('../model/user');
const Organization = require('../model/organization');

exports.getOrgUsers = async (req, res, next) => {
  const { orgCode } = req.query;

  const result = await User.find({ 'organization.organizationCode': orgCode })
    .select('-password -_id -organization.address -organization._id')
    .sort({ name: 1 });

  res.send({ result });
};
