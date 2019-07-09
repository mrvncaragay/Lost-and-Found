const mongoose = require('../startup/dbConnection');
const Organization = require('./organization');
const Property = require('./property');
const jwt = require('jsonwebtoken');

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
      minlength: [5, 'must be greater than 5 characters.'],
      maxlength: [50, 'must be less than 10 characters.']
    },

    password: {
      type: String,
      minlength: [10, 'must be greater than 10 characters.'],
      maxlength: [512, 'must be less than 512 characters.'],
      required: true
    },

    adminType: {
      type: String,
      //sw (Software User), org (Organization User), prop (Property User)
      enum: ['swAdmin', 'orgAdmin', 'propAdmin', 'security'],
      required: true
    },

    organization: {
      type: Organization.schema
    },

    propertyCode: {
      type: String,
      minlength: [2, 'must be greater than 2 characters.'],
      maxlength: [15, 'must be less than 10 characters.'],
      default: 'none'
    },

    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    },

    jwtToken: {
      type: String,
      get: function() {
        return jwt.sign(
          {
            _id: this._id,
            name: this.name,
            email: this.email,
            property: {
              get: async function() {
                return await Property.find({propertyCode: this.propertyCode}).select('name');
              }
            },
            propertyCode: this.propertyCode,
            organization: this.organization,
            adminType: this.adminType,
            status: this.status
          },
          process.env.JWT,
          {
            expiresIn: '2hr'
          }
        );
      }
    }
  })
);

module.exports = User;
