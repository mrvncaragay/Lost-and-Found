const Lost = require('../model/lost');
const Property = require('../model/property');

exports.postLost = async (req, res) => {
  const newLost = new Lost({
    ...req.body
  });

  await newLost.save();

  res.send(newLost);
};

exports.getPropertyLost = async (req, res) => {
  if (!req.user) return res.status(404).send('Unauthorized.');
  const { _id: propId } = req.user.property;

  const prop = Property.findById(propId);
  if (!prop) return res.status(404).send('The property with the given ID was not found.');

  const lost = await Lost.find({ propertyId: propId }).sort({ createdAt: 1 });

  res.send({ lost });
};
