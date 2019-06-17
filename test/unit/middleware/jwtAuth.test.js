require('dotenv').config();
const User = require('../../../model/user');
const jwtAuth = require('../../../middleware/jwtAuth');
const mongoose = require('mongoose');

describe('jwtAuth middleware', () => {
  it('it should populate req.use with the data of a valid JWT', () => {
    const user = {
      _id: mongoose.Types.ObjectId().toHexString(),
      adminType: 'propAdmin',
      email: 'test@yahoo.com',
      propertyCode: 'SHR'
    };

    const token = new User(user).jwtToken;
    const req = {
      header: jest.fn().mockReturnValue(token)
    };

    const res = {};
    const next = jest.fn();

    jwtAuth.isTokenValid(req, res, next);
    expect(req.user).toMatchObject(user);
  });
});
