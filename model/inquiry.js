const mongoose = require('../startup/dbConnection');
const uniqid = require('uniqid');

const Inquiry = mongoose.model(
  'Inquiry',
  new mongoose.Schema({
    ref: {
      type: String,
      default: uniqid.time('ref-')
    },

    timestamps: true,

    dateInquire: {
      date: String,
      time: String
    },

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
      name: String,
      phone: String,
      address: String,
      email: String
      default: 'unknown'
    },

    recorder: String
  })
);

module.exports = Inquiry;
