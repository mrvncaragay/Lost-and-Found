const mongoose = require('../startup/dbConnection');
const Property = require('./property');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [5, 'must be greater than 5 characters.'],
      maxlength: [50, 'must be less than 50 characters.']
    },

    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Must be valid email address.'],
      minlength: [5, 'must be greater than 3 characters.'],
      maxlength: [50, 'must be less than 10 characters.']
    },

    password: {
      type: String,
      minlength: [10, 'must be greater than 3 characters.'],
      maxlength: [1024, 'must be less than 10 characters.'],
      required: true
    },

    adminType: {
      type: String,
      //sw (Software Admin), org (Organization Admin), prop (Property Admin)
      enum: ['swAdmin', 'orgAdmin', 'propAdmin'],
      required: true
    },

    property: {
      type: Property.schema,
      required: true
    }
  })
);

module.exports = User;
