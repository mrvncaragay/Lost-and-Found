const mongoose = require('../startup/dbConnection');
const uniqid = require('uniqid');

const Inquiry = mongoose.model(
  'Inquiry',
  new mongoose.Schema({
    ref: {
      type: String,
      default: uniqid.time()
    },

    dateRegistered: {
      date: String,
      time: String
    },

    description: {
      type: String,
      required: true,
      minlength: [5, 'must be greater than 5 characters.']
    },

    locatedAt: {
      type: String,
      required: true,
      minlength: [3, 'must be greater than 3 characters.']
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
  })
);

module.exports = Inquiry;
