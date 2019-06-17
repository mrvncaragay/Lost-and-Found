const Organization = require('../model/organization');

exports.index = async (req, res) => {
  const result = await Organization.find().sort('name');

  res.send(result);
  //res.send('Hi There!');
};
