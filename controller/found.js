const Found = require('../model/found');
const Property = require('../model/property');

exports.postFound = async (req, res) => {
  const newFound = new Found({
    ...req.body
  });

  await newFound.save();

  res.send(newFound);
};

exports.getPropertyFound = async (req, res) => {
  if (!req.user) return res.status(404).send('Unauthorized.');
  const { _id: propId } = req.user.property;

  const prop = Property.findById(propId);
  if (!prop) return res.status(404).send('The property with the given ID was not found.');

  const found = await Found.find({ propertyId: propId }).sort({ createdAt: 1 });

  res.send({ found });
};
