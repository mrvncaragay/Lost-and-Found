const mongoose = require('../startup/dbConnection');
const uniqid = require('uniqid');

const Found = mongoose.model(
  'Found',
  new mongoose.Schema(
    {
      ref: {
        type: String,
        default: uniqid.time('ref-')
      },

      dateFound: {
        date: String,
        time: String
      },

      description: {
        type: String,
        required: true,
        minlength: [5, 'must be greater than 5 characters.']
      },

      foundAt: {
        type: String,
        required: true,
        minlength: [5, 'must be greater than 5 characters.']
      },

      status: {
        type: String,
        enum: ['New', 'Found', 'Returned'],
        default: 'New'
      },

      owner: {
        type: Object,
        name: String,
        phone: String,
        address: String,
        email: String,
        default: 'unknown'
      },

      recorder: String,

      propertyId: {
        type: String,
        required: true
      }
    },
    {
      timestamps: true
    }
  )
);

module.exports = Found;
