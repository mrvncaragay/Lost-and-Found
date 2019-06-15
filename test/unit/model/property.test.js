require('dotenv').config();
process.env.LOCALDB = process.env.TESTDB;
const Property = require('../../../model/property');
const mongoose = require('mongoose');

describe('Property', () => {
  let mockProp;
  let name;
  let address;
  let phone;
  let propertyCode;
  let organization;

  beforeEach(() => {
    name = 'Valid name';
    address = 'Valid address';
    propertyCode = 'VALID';
    phone = '1234567890';
    organization = mongoose.Types.ObjectId();

    mockProp = new Property({ name, address, propertyCode, phone, organization });
  });

  afterAll(async done => {
    await mongoose.disconnect();
    done();
  });

  it('should be invalid if name is empty', () => {
    mockProp.name = '';

    const err = mockProp.validateSync();
    expect(err.errors.name).toBeTruthy();
    expect(err.errors.name.message).toBe('Path `name` is required.');
  });

  it('should be invalid if address is empty', () => {
    mockProp.address = '';

    const err = mockProp.validateSync();
    expect(err.errors.address).toBeTruthy();
    expect(err.errors.address.message).toBe('Path `address` is required.');
  });

  it('should be invalid if propertyCode is empty', () => {
    mockProp.propertyCode = '';

    const err = mockProp.validateSync();
    expect(err.errors.propertyCode).toBeTruthy();
    expect(err.errors.propertyCode.message).toBe('Path `propertyCode` is required.');
  });

  it('should be invalid if phone is empty', () => {
    mockProp.phone = '';

    const err = mockProp.validateSync();
    expect(err.errors.phone).toBeTruthy();
    expect(err.errors.phone.message).toBe('Path `phone` is required.');
  });

  it('should be invalid if organization is empty', () => {
    mockProp.organization = null;

    const err = mockProp.validateSync();
    expect(err.errors.organization).toBeTruthy();
    expect(err.errors.organization.message).toBe('Path `organization` is required.');
  });

  it('should be invalid if name is less than 10 chars', () => {
    mockProp.name = 'five';

    const err = mockProp.validateSync();
    expect(err.errors.name).toBeTruthy();
    expect(err.errors.name.message).toBe('must be greater than 10 characters.');
  });

  it('should be invalid if address is less than 10 chars', () => {
    mockProp.address = 'five';

    const err = mockProp.validateSync();
    expect(err.errors.address).toBeTruthy();
    expect(err.errors.address.message).toBe('must be greater than 10 characters.');
  });

  it('should be invalid if address is less than 10 chars', () => {
    mockProp.phone = '1234';

    const err = mockProp.validateSync();
    expect(err.errors.phone).toBeTruthy();
    expect(err.errors.phone.message).toBe('must be greater than 5 characters.');
  });

  it('should be invalid if propertyCode is less than 3 chars', () => {
    mockProp.propertyCode = 'AS';

    const err = mockProp.validateSync();
    expect(err.errors.propertyCode).toBeTruthy();
    expect(err.errors.propertyCode.message).toBe('must be greater than 3 characters.');
  });

  it('should be invalid if name is more than 100 chars', () => {
    mockProp.name = new Array(102).join('a');

    const err = mockProp.validateSync();
    expect(err.errors.name).toBeTruthy();
    expect(err.errors.name.message).toBe('must be less than 100 characters.');
  });

  it('should be invalid if address is more than 100 chars', () => {
    mockProp.address = new Array(102).join('a');

    const err = mockProp.validateSync();
    expect(err.errors.address).toBeTruthy();
    expect(err.errors.address.message).toBe('must be less than 100 characters.');
  });

  it('should be invalid if phone is more than 20 chars', () => {
    mockProp.phone = new Array(22).join('a');

    const err = mockProp.validateSync();
    expect(err.errors.phone).toBeTruthy();
    expect(err.errors.phone.message).toBe('must be less than 20 characters.');
  });
});
