require('dotenv').config();
process.env.LOCALDB = process.env.TESTDB;
const User = require('../../../model/user');
const mongoose = require('mongoose');

// test: status, role

describe('User', () => {
  let mockUser;
  let name;
  let email;
  let password;
  let adminType;
  let propertyCode;

  beforeEach(() => {
    name = 'Valid name';
    email = 'Valid@yahoo.com';
    propertyCode = 'VALID';
    password = '12345@67890';
    adminType = 'propAdmin';

    property = mongoose.Types.ObjectId();
    mockUser = new User({ name, email, password, adminType, propertyCode });
  });

  afterEach(async () => {
    await User.deleteMany({});
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
    expect(err).toBeFalsy();
  });

  it('should be invalid if email exist', async () => {
    await mockUser.save();

    mockUser2 = new User({ name, email, password, adminType, propertyCode });

    await mockUser2.save().catch(err => {
      expect(err.errmsg).toBeTruthy();
    });
  });

  it('should be invalid if password is empty', () => {
    mockUser.password = '';

    const err = mockUser.validateSync();
    expect(err.errors.password).toBeTruthy();
    expect(err.errors.password.message).toBe('Path `password` is required.');
  });

  it('should be invalid if password is less than 10 characters', () => {
    mockUser.password = '12345678';

    const err = mockUser.validateSync();
    expect(err.errors.password).toBeTruthy();
    expect(err.errors.password.message).toBe('must be greater than 10 characters.');
  });

  it('should be invalid if password is more than 1024 characters', () => {
    mockUser.password = new Array(514).join('a');

    const err = mockUser.validateSync();
    expect(err.errors.password).toBeTruthy();
    expect(err.errors.password.message).toBe('must be less than 512 characters.');
  });

  it('should be invalid if adminType is invalid', () => {
    let adminType2 = 'superAdmin';
    mockUser.adminType = adminType2;

    const err = mockUser.validateSync();
    expect(err.errors.adminType).toBeTruthy();
    expect(err.errors.adminType.message).toBeTruthy();
  });

  it('should be valid if adminType is valid', () => {
    let adminType2 = 'swAdmin';
    mockUser.adminType = adminType2;

    const err = mockUser.validateSync();
    expect(err).toBeFalsy();
  });

  it('should be invalid if propertyCode is empty', () => {
    mockUser.propertyCode = '';

    const err = mockUser.validateSync();
    expect(err.errors.propertyCode).toBeTruthy();
    expect(err.errors.propertyCode.message).toBe('Path `propertyCode` is required.');
  });

  it('should be invalid if propertyCode is less than 3 characters', () => {
    mockUser.propertyCode = 'AB';

    const err = mockUser.validateSync();
    expect(err.errors.propertyCode).toBeTruthy();
    expect(err.errors.propertyCode.message).toBe('must be greater than 3 characters.');
  });

  it('should be invalid if propertyCode is less than 10 characters', () => {
    mockUser.propertyCode = 'ABdsadssdadsadadasd';

    const err = mockUser.validateSync();
    expect(err.errors.propertyCode).toBeTruthy();
    expect(err.errors.propertyCode.message).toBe('must be less than 10 characters.');
  });
});
