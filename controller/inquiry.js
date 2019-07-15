const Inquiry = require('../model/inquiry');
const Property = require('../model/property');

exports.postInquiry = async (req, res) => {
  const newInquiry = new Inquiry({
    ...req.body
  });

  await newInquiry.save();

  res.send(newInquiry);
};


exports.getPropertyInquiry = async (req, res) => {
  if (!req.user) return res.status(404).send('Unauthorized.');
  const { _id: propId } = req.user.property;

  const prop = Property.findById(propId);
  if (!prop) return res.status(404).send('The property with the given ID was not found.');

  const inquiry = await Inquiry.find({ propertyId: propId }).sort({ createdAt: 1 });

  res.send({ inquiry });
};
