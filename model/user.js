const mongoose = require('../startup/dbConnection');
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
      enum: ['swAdmin', 'orgAdmin', 'propAdmin'],
      required: true
    },

    propertyCode: {
      type: String,
      required: true,
      minlength: [3, 'must be greater than 3 characters.'],
      maxlength: [10, 'must be less than 10 characters.']
    },

    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'inactive'
    },

    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user'
    },

    jwtToken: {
      type: String,
      get: function() {
        return jwt.sign(
          {
            _id: this._id,
            email: this.email,
            propertyCode: this.propertyCode,
            adminType: this.adminType
          },
          process.env.JWT,
          {
            expiresIn: 60 * 60 * 24 //expires in 24 hours
          }
        );
      }
    }
  })
);

module.exports = User;
