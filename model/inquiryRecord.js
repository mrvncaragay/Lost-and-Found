const mongoose = require('../startup/dbConnection');

const InquiryRecord = mongoose.model(
  'InquiryRecord',
  new mongoose.Schema({
    dateInquired: {
      type: Date,
      default: Date.now
    },

    name: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    email: {
      type: String
    }
  })
);

module.exports = InquiryRecord;
