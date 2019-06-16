const mongoose = require('../startup/dbConnection');
const ReturnedRecord = require('./returnedRecord');

const FoundRecord = mongoose.model(
  'FoundRecord',
  new mongoose.Schema({
    siNo: {
      type: String
    },

    dateFound: {
      type: Date,
      default: Date.now
    },

    timeFound: {
      type: String,
      required: true,
      minlength: [5, 'must be greater than 5 characters.']
    },

    //Area Room where item found
    arFound: {
      type: String,
      required: true,
      minlength: [5, 'must be greater than 5 characters.']
    },

    item: {
      type: String,
      required: true,
      minlength: [5, 'must be greater than 5 characters.']
    },

    description: {
      type: String,
      required: true,
      minlength: [5, 'must be greater than 5 characters.']
    },

    foundBy: {
      type: String,
      required: true,
      minlength: [5, 'must be greater than 5 characters.']
    },

    located: {
      type: String,
      minlength: [5, 'must be greater than 5 characters.']
    },

    isReturned: {
      type: Boolean,
      default: false
    },

    foundRecord: {
      type: ReturnedRecord.schema
    }
  })
);

module.exports = FoundRecord;
