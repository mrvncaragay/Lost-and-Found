require('dotenv').config();
process.env.LOCALDB = process.env.TESTDB;
const User = require('../../../model/user');
const Property = require('../../../model/property');
const Organization = require('../../../model/organization');
const mongoose = require('mongoose');

describe('User', () => {
  let mockUser;
  let name;
  let email;
  let password;
  let adminType;
  let property;

  beforeEach(() => {
    name = 'Valid name';
    email = 'Valid@yahoo.com';
    propertyCode = 'VALID';
    password = '12345@67890';
    adminType = 'propAdmin';
    property = mongoose.Types.ObjectId();

    mockUser = new User({ name, email, password, adminType, property });
  });

  afterAll(async done => {
    await mongoose.disconnect();
    done();
  });

  it('should be invalid if name is empty', () => {
    mockUser.name = '';

    const err = mockUser.validateSync();
    expect(err.errors.name).toBeTruthy();
    expect(err.errors.name.message).toBe('Path `name` is required.');
  });

  it('should be invalid if name is less than 5 characters', () => {
    mockUser.name = 'mdsa';

    const err = mockUser.validateSync();
    expect(err.errors.name).toBeTruthy();
    expect(err.errors.name.message).toBe('must be greater than 5 characters.');
  });

  it('should be invalid if name is more than 50 characters', () => {
    mockUser.name = new Array(53).join('a');

    const err = mockUser.validateSync();
    expect(err.errors.name).toBeTruthy();
    expect(err.errors.name.message).toBe('must be less than 50 characters.');
  });

  it('should be invalid if email is empty', () => {
    mockUser.email = '';

    const err = mockUser.validateSync();
    expect(err.errors.email).toBeTruthy();
    expect(err.errors.email.message).toBe('Path `email` is required.');
  });

  it('should be invalid if email is invalid', () => {
    mockUser.email = 'dsadasddas';

    const err = mockUser.validateSync();
    expect(err.errors.email).toBeTruthy();
    expect(err.errors.email.message).toEqual('Must be valid email address.');
  });

  it('should be invalid if email is invalid', () => {
    mockUser.email = 'dsadasddas@.com';

    const err = mockUser.validateSync();
    expect(err.errors.email).toBeTruthy();
    expect(err.errors.email.message).toEqual('Must be valid email address.');
  });

  it('should be invalid if email is invalid', () => {
    mockUser.email = 'dsadasddasyahoo.com';

    const err = mockUser.validateSync();
    expect(err.errors.email).toBeTruthy();
    expect(err.errors.email.message).toEqual('Must be valid email address.');
  });

  it('should be invalid if email is invalid', () => {
    mockUser.email = 'dsadasddas@yahoocom';

    const err = mockUser.validateSync();
    expect(err.errors.email).toBeTruthy();
    expect(err.errors.email.message).toEqual('Must be valid email address.');
  });

  it('should be valid if email is valid', () => {
    mockUser.email = 'dsadasddas@yahoo.com';

    const err = mockUser.validateSync();
    expect(err.errors.email).toBeFalsy();
  });

  it('should be invalid if email exist', () => {
    mockUser.save();
    mockUser2 = new User({ name, email, password, adminType, property });

    const err = mockUser2.validateSync();
    expect(err.errors.email).toBeTruthy();
    expect(err.errors.email.message).toEqual('Must be valid email address.');
  });

  // it('should be invalid if propertyCode is empty', () => {
  //   mockProp.propertyCode = '';

  //   mockProp.validate(err => {
  //     expect(err.errors.propertyCode).toBeTruthy();
  //     expect(err.errors.propertyCode.message).toBe('Path `propertyCode` is required.');
  //   });
  // });

  // it('should be invalid if phone is empty', () => {
  //   mockProp.phone = '';

  //   mockProp.validate(err => {
  //     expect(err.errors.phone).toBeTruthy();
  //     expect(err.errors.phone.message).toBe('Path `phone` is required.');
  //   });
  // });

  // it('should be invalid if organization is empty', () => {
  //   mockProp.organization = null;

  //   mockProp.validate(err => {
  //     expect(err.errors.organization).toBeTruthy();
  //     expect(err.errors.organization.message).toBe('Path `organization` is required.');
  //   });
  // });

  // it('should be invalid if name is less than 10 chars', () => {
  //   mockProp.name = 'five';

  //   mockProp.validate(err => {
  //     expect(err.errors.name).toBeTruthy();
  //     expect(err.errors.name.message).toBe('must be greater than 10 characters.');
  //   });
  // });

  // it('should be invalid if address is less than 10 chars', () => {
  //   mockProp.address = 'five';

  //   mockProp.validate(err => {
  //     expect(err.errors.address).toBeTruthy();
  //     expect(err.errors.address.message).toBe('must be greater than 10 characters.');
  //   });
  // });

  // it('should be invalid if address is less than 10 chars', () => {
  //   mockProp.phone = '1234';

  //   mockProp.validate(err => {
  //     expect(err.errors.phone).toBeTruthy();
  //     expect(err.errors.phone.message).toBe('must be greater than 5 characters.');
  //   });
  // });

  // it('should be invalid if propertyCode is less than 3 chars', () => {
  //   mockProp.propertyCode = 'AS';

  //   mockProp.validate(err => {
  //     expect(err.errors.propertyCode).toBeTruthy();
  //     expect(err.errors.propertyCode.message).toBe('must be greater than 3 characters.');
  //   });
  // });

  // it('should be invalid if name is more than 100 chars', () => {
  //   mockProp.name = new Array(102).join('a');

  //   mockProp.validate(err => {
  //     expect(err.errors.name).toBeTruthy();
  //     expect(err.errors.name.message).toBe('must be less than 100 characters.');
  //   });
  // });

  // it('should be invalid if address is more than 100 chars', () => {
  //   mockProp.address = new Array(102).join('a');

  //   mockProp.validate(err => {
  //     expect(err.errors.address).toBeTruthy();
  //     expect(err.errors.address.message).toBe('must be less than 100 characters.');
  //   });
  // });

  // it('should be invalid if phone is more than 20 chars', () => {
  //   mockProp.phone = new Array(22).join('a');

  //   mockProp.validate(err => {
  //     expect(err.errors.phone).toBeTruthy();
  //     expect(err.errors.phone.message).toBe('must be less than 20 characters.');
  //   });
  // });
});
