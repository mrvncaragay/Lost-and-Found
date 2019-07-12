const mongoose = require('../startup/dbConnection');
const uniqid = require('uniqid');

const Found = mongoose.model(
  'Found',
  new mongoose.Schema({
    ref: {
      type: String,
      default: uniqid.time('ref-')
    },

    timestamps: true,

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
      default: 'unknown'
    },

    recorder: String
  })
);

module.exports = Found;
