const mongoose = require('../startup/dbConnection');

const Organization = mongoose.model(
  'Organization',
  new mongoose.Schema({
    name: {
      type: String,
      minlength: [10, 'must be greater than 10 characters.'],
      maxlength: [100, 'must be less than 100 characters.'],
      required: true
    },

    propertyCode: {
      type: String,
      required: true,
      minlength: [3, 'must be greater than 3 characters.'],
      maxlength: [10, 'must be less than 10 characters.']
    },

    address: {
      type: String,
      minlength: [10, 'must be greater than 10 characters.'],
      maxlength: [100, 'must be less than 100 characters.'],
      required: true
    }
  })
);

module.exports = Organization;
