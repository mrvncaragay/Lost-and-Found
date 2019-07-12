const mongoose = require('../startup/dbConnection');
const uniqid = require('uniqid');

const Lost = mongoose.model(
  'Lost',
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

    lostAt: {
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
      phone: String
    },

    recorder: String
  })
);

module.exports = Lost;
