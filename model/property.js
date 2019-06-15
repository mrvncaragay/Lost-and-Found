const mongoose = require('../startup/dbConnection');
const Organization = require('./organization');

const Property = mongoose.model(
  'Property',
  new mongoose.Schema({
    propertyCode: {
      type: String,
      required: true,
      minlength: [5, 'must be greater than 3 characters.'],
      maxlength: [10, 'must be less than 10 characters.']
    },

    name: {
      type: String,
      required: true,
      minlength: [10, 'must be greater than 10 characters.'],
      maxlength: [100, 'must be less than 100 characters.']
    },

    address: {
      type: String,
      minlength: [10, 'must be greater than 10 characters.'],
      maxlength: [100, 'must be less than 100 characters.'],
      required: true
    },

    phone: {
      type: String,
      minlength: [5, 'must be greater than 5 characters.'],
      maxlength: [20, 'must be less than 20 characters.'],
      required: true
    },

    organization: {
      type: Organization.schema,
      required: true
    }
  })
);

module.exports = Property;
