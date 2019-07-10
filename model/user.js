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

    property: {
      type: Property.schema
    },

    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    },

    jwtToken: {
      type: String,
      get: function() {
        let name = 'orgAdmin';
        let propertyCode = 'orgAdmin';

        if (this.property) {
          name = this.property.name;
          propertyCode = this.property.propertyCode;
        }

        return jwt.sign(
          {
            name: this.name,
            email: this.email,
            propertyCode: this.propertyCode,
            adminType: this.adminType,
            propertyCode: propertyCode,
            organization: {
              _id: this.organization._id,
              name: this.organization.name,
              organizationCode: this.organization.organizationCode
            }
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
