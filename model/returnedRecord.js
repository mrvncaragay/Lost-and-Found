const mongoose = require('../startup/dbConnection');

const ReturnedRecord = mongoose.model(
  'ReturnedRecord',
  new mongoose.Schema({
    collectedBy: {
      type: String,
      required: true
    },

    releasedBy: {
      type: String,
      required: true
    },

    phone: {
      type: String
    },

    dateReleased: {
      type: Date,
      default: Date.now
    }
  })
);

module.exports = ReturnedRecord;
